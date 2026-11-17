import { ArrowUpRight } from "lucide-react";

export function IdeaSection() {
  return (
    <section id="who-we-are" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-display text-sm font-bold text-accent">01 /</span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          The AfriFlux Idea
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Big ambition needs
            <br />
            a better bridge.
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Africa has the talent. Europe has capital looking for meaningful
              opportunities. We work to connect the two.
            </p>
            <p>
              AfriFlux is a cross-border impact advisory and asset-financing
              platform, with an initial focus on Nigerian agriculture and the
              sustainable transition. We combine the discipline of European
              structuring with the insight of African operating partners.
            </p>
          </div>

          <a
            href="#expertise"
            className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
          >
            What we bring to the table
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Image + connection strip */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl lg:col-span-2">
          <img
            src="/IMG_20260224_175911_977.png"
            alt="AfriFlux representatives with international partners at an industry event"
            className="h-72 w-full object-cover object-top sm:h-96"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground backdrop-blur">
            AfriFlux representatives with international partners at an industry
            event
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Our connection
            </span>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
              Capital meets capability.
            </h3>
          </div>
          <a
            href="#connect"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Belgium / Nigeria
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Photo gallery strip */}
      <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/IMG-20260206-WA0011.jpg.jpeg"
            alt="AfriFlux, Poulber and Ecoflux activities"
            className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/20260629_141821.jpg.jpeg"
            alt="AfriFlux, Poulber and Ecoflux project environment"
            className="h-56 w-full object-cover object-top transition-transform duration-500 hover:scale-105 sm:h-64"
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/IMG_20260224_175925_873.png"
            alt="AfriFlux, Poulber and Ecoflux team"
            className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
          />
        </div>
      </div>
    </section>
  );
}
