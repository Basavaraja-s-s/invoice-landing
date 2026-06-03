import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "forever",
    desc: "For solo operators getting paid faster.",
    features: ["50 invoices / mo", "Email delivery", "1 template", "Stripe sync"],
    cta: "Start free",
  },
  {
    name: "Studio",
    price: "$39",
    cadence: "/ month",
    desc: "The default for growing teams.",
    features: [
      "Unlimited invoices",
      "Email + WhatsApp",
      "Unlimited templates",
      "Auto-reminders & dunning",
      "Slack & webhook routing",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    desc: "For finance teams with throughput.",
    features: ["SSO + audit log", "Dedicated infra", "SLA & priority support", "Onboarding architect"],
    cta: "Talk to us",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Pricing</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.02] tracking-tight text-balance">
            Honest pricing. No per-seat trap.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col gap-6 rounded-3xl border p-8 ${
                t.featured
                  ? "border-foreground bg-foreground text-background"
                  : "border-border/70 bg-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium glow-lime"
                  style={{ background: "var(--lime)", color: "var(--lime-foreground)" }}>
                  Most loved
                </span>
              )}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{t.name}</p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-6xl tracking-tight">{t.price}</span>
                  {t.cadence && <span className="text-sm opacity-70">{t.cadence}</span>}
                </div>
                <p className="mt-3 text-sm opacity-80">{t.desc}</p>
              </div>

              <ul className="space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: t.featured ? "var(--lime)" : "var(--rust)" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-px ${
                  t.featured
                    ? "bg-background text-foreground"
                    : "border border-foreground/15 bg-transparent text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
