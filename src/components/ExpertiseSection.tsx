import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Strategy & advisory",
    description:
      "Feasibility, business modelling, investor readiness and cross-border opportunity development.",
    cta: "Make it investable",
  },
  {
    number: "02",
    title: "Productive-asset finance",
    description:
      "Proposed ring-fenced structures linking finance to identifiable assets and practical enterprise needs.",
    cta: "Make it productive",
  },
  {
    number: "03",
    title: "Monitoring & impact",
    description:
      "Asset-level oversight, performance data, traceability and transparent outcome reporting.",
    cta: "Make it accountable",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-accent">02 /</span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What we do
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            More than finance.
            <br />
            A complete perspective.
          </h2>
          <p className="max-w-md self-end text-lg leading-relaxed text-foreground/80">
            Support that starts with a sound opportunity and follows it through
            to accountable, productive operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="font-display text-sm font-bold text-accent">
                  {service.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </div>
              <a
                href="#connect"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary transition-colors group-hover:text-primary/80"
              >
                {service.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
