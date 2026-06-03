const logos = [
  "Northwind", "Acme & Co.", "Lumen Studio", "Helios", "Atelier Nord",
  "Verdant", "Mercer", "Pinecone", "Forge Labs", "Halcyon",
];

export function Marquee() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by operators at 2,400+ small teams
        </p>
        <div className="relative mt-8 overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
          <div className="flex w-max gap-14 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/80 whitespace-nowrap">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
