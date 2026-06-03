import { motion } from "motion/react";
import { Check, Mail, MessageCircle, Eye } from "lucide-react";

export function InvoicePreview() {
  return (
    <div className="relative rounded-3xl border border-border/70 bg-card/70 p-3 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.35)]">
      <div className="grid gap-3 rounded-2xl bg-background/60 p-4 sm:grid-cols-[1.4fr_1fr]">
        {/* Left: Invoice */}
        <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 grain">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Invoice</p>
              <h3 className="mt-1 font-display text-2xl">INV-2087</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
              style={{ background: "color-mix(in oklab, var(--lime) 28%, transparent)", color: "var(--lime-foreground)" }}>
              <Check className="h-3 w-3" /> Paid
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-muted-foreground">Billed to</p>
              <p className="mt-1 font-medium">Atelier Nord, Inc.</p>
              <p className="text-muted-foreground">accounts@ateliernord.co</p>
            </div>
            <div>
              <p className="text-muted-foreground">Due</p>
              <p className="mt-1 font-medium">Jun 14, 2026</p>
              <p className="text-muted-foreground">Net 14</p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-xs">
            {[
              ["Design retainer · May", "$4,200.00"],
              ["Brand system refresh", "$1,800.00"],
              ["Hosting & infra", "$120.00"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-dashed border-border/60 py-1.5">
                <span>{k}</span>
                <span className="font-mono">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-end justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Total</p>
            <p className="font-display text-3xl">$6,120.00</p>
          </div>
        </div>

        {/* Right: Activity */}
        <div className="flex flex-col gap-3">
          <ActivityCard
            icon={<Mail className="h-3.5 w-3.5" />}
            label="Email delivered"
            target="accounts@ateliernord.co"
            time="2s"
            delay={0.6}
          />
          <ActivityCard
            icon={<MessageCircle className="h-3.5 w-3.5" />}
            label="WhatsApp sent"
            target="+1 (415) 555 · 0188"
            time="2s"
            delay={0.9}
            accent
          />
          <ActivityCard
            icon={<Eye className="h-3.5 w-3.5" />}
            label="Opened on iPhone"
            target="Safari · San Francisco"
            time="14s"
            delay={1.4}
          />
          <ActivityCard
            icon={<Check className="h-3.5 w-3.5" />}
            label="Paid via Stripe"
            target="Auto-reconciled"
            time="3m"
            delay={2}
            success
          />
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute -left-6 top-1/3 hidden rounded-2xl border border-border/70 bg-card/90 p-3 shadow-xl backdrop-blur-xl md:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">This month</p>
        <p className="mt-1 font-display text-2xl">$184,902</p>
        <p className="text-xs text-muted-foreground">↑ 38% vs April</p>
      </motion.div>
    </div>
  );
}

function ActivityCard({
  icon, label, target, time, delay = 0, accent, success,
}: {
  icon: React.ReactNode; label: string; target: string; time: string;
  delay?: number; accent?: boolean; success?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3"
    >
      <span
        className="grid h-8 w-8 place-items-center rounded-lg"
        style={{
          background: success
            ? "color-mix(in oklab, var(--lime) 28%, transparent)"
            : accent
            ? "color-mix(in oklab, var(--rust) 22%, transparent)"
            : "var(--muted)",
          color: success ? "var(--lime-foreground)" : accent ? "var(--rust)" : "var(--foreground)",
        }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium">{label}</p>
        <p className="truncate text-[11px] text-muted-foreground">{target}</p>
      </div>
      <span className="font-mono text-[10px] text-muted-foreground">{time}</span>
    </motion.div>
  );
}
