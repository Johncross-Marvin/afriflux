import { ArrowUpRight, Check } from "lucide-react";

export function CompaniesSection() {
  return (
    <section id="companies" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-display text-sm font-bold text-accent">03 /</span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Backed companies
        </span>
      </div>

      <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Different ventures.
          <br />
          One shared ambition.
        </h2>
        <p className="max-w-md self-end text-lg leading-relaxed text-foreground/80">
          Explore the AfriFlux-backed companies advancing practical solutions in
          agriculture and the clean-energy transition.
        </p>
      </div>

      {/* Poulber */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/IMG_20260224_175925_873.png"
            alt="Poulber team members at a poultry training and farm session"
            className="h-full min-h-[320px] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground backdrop-blur">
            Poulber team members at a poultry training and farm session
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                AfriFlux-backed company
              </span>
              <span className="font-display text-sm font-bold text-accent">
                01 / 02
              </span>
            </div>

            <span className="mt-8 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/70">
              Agritech & Farming Solutions
            </span>

            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Poulber Africa.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              A farm-management and poultry-production platform designed to give
              young people a practical way into commercial poultry farming.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Start poultry farming with ₦0 upfront farm capital*",
                "Farms, birds and operational support",
                "Technology-enabled farm management",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://www.poulber.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary"
          >
            Explore Poulber
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Ecoflux */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 lg:order-1">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                AfriFlux-backed company
              </span>
              <span className="font-display text-sm font-bold text-accent">
                02 / 02
              </span>
            </div>

            <span className="mt-8 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/70">
              Renewable Energy & Sustainability
            </span>

            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Ecoflux Nigeria.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Clean-energy and sustainability solutions focused on expanding
              access to renewable technologies and supporting energy transition.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Solar and renewable-energy solutions",
                "Practical technologies for enterprises",
                "Cleaner, more resilient systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://www.ecofluxng.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary"
          >
            Visit Ecoflux website
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-3xl lg:order-2">
          <img
            src="/20260629_141821.jpg.jpeg"
            alt="AfriFlux representative presenting Ecoflux at a public event"
            className="h-full min-h-[320px] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground backdrop-blur">
            AfriFlux representative presenting Ecoflux at a public event
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
        *Poulber's ₦0 entry proposition refers to no upfront farm infrastructure
        or stock capital for selected participants. The programme remains subject
        to availability, eligibility and final terms. Imagery is illustrative,
        not documentary.
      </p>
    </section>
  );
}
