import { motion } from "motion/react";
import { InvoicePreview } from "./InvoicePreview";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-aurora"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--lime) 45%, transparent), transparent 70%)" }} />
        <div className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--rust) 55%, transparent), transparent 70%)" }} />
      </div>

      {/* Subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }} />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rust opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "var(--rust)" }} />
            </span>
            Now in private beta · invite codes weekly
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
            Invoicing on{" "}
            <span className="relative inline-block">
              <span className="italic">autopilot</span>
              <motion.svg
                viewBox="0 0 300 24"
                className="absolute -bottom-3 left-0 w-full"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease }}
              >
                <motion.path
                  d="M4 14 C 80 4, 220 4, 296 14"
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            ,
            <br className="hidden sm:block" /> delivered everywhere.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            InvoiceFlow turns your templates into a billing engine. Generate, send, and track invoices across
            email and WhatsApp — without lifting a finger.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: "0 18px 50px -12px color-mix(in oklab, var(--foreground) 55%, transparent)" }} />
              Start sending in 4 minutes
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#flow"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Watch the 90s demo
            </a>
          </motion.div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
            No card · Free up to 50 invoices / mo
          </p>
        </motion.div>

        {/* Floating product preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          style={{ perspective: 1400 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <InvoicePreview />
        </motion.div>
      </div>
    </section>
  );
}
