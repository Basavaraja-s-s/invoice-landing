import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

const links = [
  { label: "Product", href: "#product" },
  { label: "Flow", href: "#flow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const { scrollY } = useScroll();
  const [stuck, setStuck] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setStuck(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.div
        animate={{
          width: stuck ? "min(720px, 96%)" : "min(1180px, 100%)",
          backgroundColor: stuck
            ? "color-mix(in oklab, var(--color-background) 78%, transparent)"
            : "transparent",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between gap-6 rounded-full border border-transparent px-4 py-2 backdrop-blur-xl"
        style={{ borderColor: stuck ? "var(--color-border)" : "transparent" }}
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <Logo />
          <span className="font-display text-xl tracking-tight">InvoiceFlow</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px"
          >
            Start free
            <span aria-hidden>→</span>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

function Logo() {
  return (
    <span className="relative grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M5 4h10l4 4v12H5z" />
        <path d="M5 10h14M9 14h6M9 17h4" />
      </svg>
    </span>
  );
}
