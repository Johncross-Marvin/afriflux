const steps = [
  {
    number: "01",
    title: "The opportunity",
    description:
      "Identify what matters. Assess enterprises, operators, real demand and productive assets worth supporting.",
  },
  {
    number: "02",
    title: "The structure",
    description:
      "Protect the purpose. Develop suitable financing, governance, ownership and compliance arrangements.",
  },
  {
    number: "03",
    title: "The operation",
    description:
      "Put assets to work. Connect equipment, local expertise and young operators to productive activity.",
  },
  {
    number: "04",
    title: "The evidence",
    description:
      "Measure what changes. Monitor performance, outcomes and asset use with a transparent reporting discipline.",
  },
];

export function ApproachSection() {
  return (
    <section id="model" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-accent">04 /</span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Our approach
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A clearer way
            <br />
            to move capital.
          </h2>
          <p className="max-w-md self-end text-lg leading-relaxed text-primary-foreground/80">
            Our proposed model is built around a simple idea: finance specific,
            productive assets rather than handing over unrestricted capital, and
            track those assets as they generate value.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
            >
              <span className="font-display text-3xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-primary-foreground/15 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/favicon.png"
              alt="AfriFlux logo mark"
              className="h-12 w-12 object-contain"
            />
            <p className="text-sm text-primary-foreground/70">
              Investment structures remain proposed and subject to legal and
              regulatory approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
