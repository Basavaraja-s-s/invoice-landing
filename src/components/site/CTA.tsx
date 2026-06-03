import { motion } from "motion/react";

export function CTA() {
  return (
    <section id="cta" className="px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border/70 bg-foreground p-12 text-background sm:p-20">
        <div aria-hidden className="absolute -top-20 -right-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-50 animate-aurora"
          style={{ background: "radial-gradient(closest-side, var(--lime), transparent 70%)" }} />
        <div aria-hidden className="absolute -bottom-32 -left-10 h-[380px] w-[380px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, var(--rust), transparent 70%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-70">Start in minutes</p>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.98] tracking-tight">
            Your next invoice writes <em className="italic">itself</em>.
          </h2>
          <p className="mt-6 max-w-lg text-base opacity-80">
            Bring a template, connect your data, watch payments roll in. Free until you're past 50/mo.
          </p>

          <form
            className="relative mt-10 flex max-w-xl flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-background placeholder:text-background/50 outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-lime-foreground transition-transform hover:-translate-y-0.5 glow-lime"
              style={{ background: "var(--lime)" }}
            >
              Get my invite
              <span aria-hidden>→</span>
            </button>
          </form>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
            SOC 2 in progress · GDPR ready · No credit card
          </p>
        </motion.div>
      </div>
    </section>
  );
}
