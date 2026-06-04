import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendInvite = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.string().email(), origin: z.string() }))
  .handler(async ({ data }) => {
    const { email, origin } = data;
    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. Attempt to insert into leads table using supabaseAdmin if service role key is available
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && serviceRoleKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const adminClient = createClient(supabaseUrl, serviceRoleKey);
        await adminClient.from("leads").insert([{ email }]);
      } catch (err) {
        console.error("[Supabase Admin] Failed to save lead:", err);
      }
    }

    // 2. Send email using Resend if API key is present
    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "InvoiceFlow <onboarding@resend.dev>",
            to: email,
            subject: "Your Invitation to InvoiceFlow",
            html: `
              <div style="font-family: sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
                <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #eee; max-width: 500px; margin: auto;">
                  <h1 style="color: #000; font-size: 24px; margin-bottom: 20px;">Your Invitation to InvoiceFlow</h1>
                  <p style="line-height: 1.6; margin-bottom: 24px;">Thanks for your interest! Your invite to InvoiceFlow is ready. Click below to get started and set up your billing engine in minutes:</p>
                  <a href="${origin}" style="display: inline-block; background-color: #a3e635; color: #000; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold;">Access InvoiceFlow</a>
                  <p style="font-size: 12px; color: #666; margin-top: 30px;">If you didn't request this invitation, you can safely ignore this email.</p>
                </div>
              </div>
            `,
          }),
        });

        if (response.ok) {
          return { success: true, method: "resend" };
        } else {
          const errText = await response.text();
          console.error("[Resend] API error:", errText);
        }
      } catch (err) {
        console.error("[Resend] Request failed:", err);
      }
    }

    return { success: false, method: "none" };
  });
