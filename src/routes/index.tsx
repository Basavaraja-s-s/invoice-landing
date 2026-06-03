import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Features } from "@/components/site/Features";
import { Flow } from "@/components/site/Flow";
import { Stats } from "@/components/site/Stats";
import { Testimonial } from "@/components/site/Testimonial";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InvoiceFlow — Invoicing on autopilot, delivered everywhere" },
      {
        name: "description",
        content:
          "InvoiceFlow turns your templates into a billing engine. Generate invoices automatically, deliver across email and WhatsApp, and track every status in one place.",
      },
      { property: "og:title", content: "InvoiceFlow — Invoicing on autopilot" },
      {
        property: "og:description",
        content:
          "Automated invoice generation, delivery, and tracking for modern teams. Email + WhatsApp, live status, and pricing without seat traps.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <ThemeProvider>
      <main className="relative bg-background text-foreground">
        <Nav />
        <Hero />
        <Marquee />
        <Features />
        <Flow />
        <Stats />
        <Testimonial />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
