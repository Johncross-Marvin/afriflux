import { ArrowUpRight } from "lucide-react";

const pillars = [
  "Youth enterprise",
  "Sustainable food systems",
  "Clean-energy adoption",
  "Traceability & accountability",
];

export function ImpactSection() {
  return (
    <section id="impact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-display text-sm font-bold text-accent">05 /</span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Long-term impact
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Progress should
            <br />
            be visible.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
            Our ambition goes beyond access to capital. It is about the
            opportunities built, assets activated and livelihoods strengthened
            along the way.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            {pillars.map((pillar) => (
              <a
                key={pillar}
                href="#connect"
                className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-3">
                  <span className="text-accent">↗</span>
                  {pillar}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/20260629_135657.jpg.jpeg"
            alt="Technician working beneath installed solar panels"
            className="h-full min-h-[400px] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground backdrop-blur">
            Poulber MD/CEO at a poultry farm during team members training and farm session
          </div>
        </div>
      </div>
    </section>
  );
}
