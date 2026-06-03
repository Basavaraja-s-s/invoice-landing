import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { n: 1800000, prefix: "$", suffix: "+", label: "Processed monthly" },
  { n: 47, suffix: "s", label: "Avg time saved per invoice" },
  { n: 99.98, suffix: "%", label: "Delivery uptime", decimals: 2 },
  { n: 2400, suffix: "+", label: "Operators using InvoiceFlow" },
];

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-accent/30 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Stat key={i} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  n, prefix = "", suffix = "", label, decimals = 0, index,
}: {
  n: number; prefix?: string; suffix?: string; label: string; decimals?: number; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) =>
    v >= 1_000_000
      ? (v / 1_000_000).toFixed(1) + "M"
      : v >= 1000
      ? Math.round(v).toLocaleString()
      : v.toFixed(decimals),
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, n, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, n, mv]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="flex flex-col gap-2"
    >
      <div className="font-display text-5xl sm:text-6xl tracking-tight">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
