import { motion } from "motion/react";

export function Testimonial() {
  return (
    <section id="customers" className="py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span aria-hidden className="font-display text-[14rem] leading-none text-muted-foreground/20 absolute -top-10 -left-6 select-none">"</span>
          <blockquote className="font-display text-3xl sm:text-5xl leading-[1.1] tracking-tight text-balance">
            We replaced three tools and a part-time bookkeeper with InvoiceFlow.
            Our DSO dropped from 41 days to <span className="italic text-rust">11</span> in one quarter.
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-foreground font-display text-xl text-background">M</span>
            <div>
              <p className="font-medium">Mira Okafor</p>
              <p className="text-sm text-muted-foreground">Head of Operations, Lumen Studio</p>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
