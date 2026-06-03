import { motion } from "motion/react";
import { FileUp, Zap, Send, Activity } from "lucide-react";

const features = [
  {
    icon: FileUp,
    title: "Bring your template",
    body: "Drop in a PDF, Figma frame, or HTML. We map your variables in seconds — no rebuild required.",
    tag: "01",
  },
  {
    icon: Zap,
    title: "Generate on triggers",
    body: "Schedules, webhooks, or a single click. Variables resolve against your CRM, Sheets, or Stripe.",
    tag: "02",
  },
  {
    icon: Send,
    title: "Email + WhatsApp",
    body: "Branded delivery on both rails. Templated copy, signed PDFs, and read receipts that actually work.",
    tag: "03",
  },
  {
    icon: Activity,
    title: "Status that closes loops",
    body: "Live timeline from sent → opened → paid. Auto-reminders, dunning, and Slack pings on overdue.",
    tag: "04",
  },
];

export function Features() {
  return (
    <section id="product" className="py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">The platform</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.02] tracking-tight text-balance">
            Built for teams who'd rather <em className="text-rust">ship</em> than chase invoices.
          </h2>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <f.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{f.tag}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
              <div className="mt-auto h-px w-full bg-gradient-to-r from-border via-foreground/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
