import { motion } from "motion/react";

const steps = [
  {
    k: "Upload",
    t: "Drop your template",
    d: "Camera detection range works properly — we capture every field, signature block, and line item.",
  },
  {
    k: "Connect",
    t: "Wire it to your data",
    d: "Hook Stripe, HubSpot, Sheets, or your DB. Or push payloads with a single POST.",
  },
  {
    k: "Send",
    t: "Deliver everywhere",
    d: "Email, WhatsApp, or both. With branded sender identity and verified domains.",
  },
  {
    k: "Track",
    t: "Close the loop",
    d: "See delivery, opens, payments, and disputes — synced back into your stack in realtime.",
  },
];

export function Flow() {
  return (
    <section id="flow" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">The flow</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Four moves between idea and money in the bank.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Replace your patchwork of forms, mail merges, and "did you get it?" follow-ups with one calm engine.
          </p>
        </div>

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[320px] flex-col justify-between bg-card p-8 transition-colors hover:bg-accent/40"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Step 0{i + 1} · {s.k}
                </span>
                <h3 className="mt-6 font-display text-3xl leading-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>

              <motion.div
                className="mt-8 h-16 w-full rounded-xl border border-border/70 bg-background/40 p-3"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="flex h-full items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--lime)" }} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {i === 0 && "template.pdf · 1.2mb · parsed"}
                    {i === 1 && "stripe.invoice.paid → trigger"}
                    {i === 2 && "POST /send · 218ms · ok"}
                    {i === 3 && "opened · whatsapp · 14s"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
