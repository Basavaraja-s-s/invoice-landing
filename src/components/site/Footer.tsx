export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-tight">InvoiceFlow</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Calm software for getting paid. Built in San Francisco & Lagos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            {[
              ["Product", ["Features", "Pricing", "Changelog", "Roadmap"]],
              ["Company", ["About", "Customers", "Careers", "Press"]],
              ["Legal", ["Privacy", "Terms", "DPA", "Security"]],
            ].map(([title, items]) => (
              <div key={title as string}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {(items as string[]).map((i) => (
                    <li key={i}>
                      <a href="#" className="text-foreground/80 transition-colors hover:text-foreground">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 InvoiceFlow Labs. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Status · All systems calm</p>
        </div>
      </div>
    </footer>
  );
}
