import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/Modern Conference Stage Presentation.png"
          alt="AfriFlux conference presentation"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <div className="fade-up mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
          <span>European Vision</span>
          <span className="text-accent">✦</span>
          <span>African Possibilities</span>
        </div>

        <h1 className="fade-up delay-1 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Capital with
          <br />
          a purpose.
          <br />
          <span className="text-accent">Impact with</span>
          <br />
          a future.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-end">
          <p className="fade-up delay-2 max-w-xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
            We connect European capital with Africa's next generation of
            productive businesses—bringing together strategy, asset-focused
            financing and local ambition.
          </p>

          <div className="fade-up delay-3 flex flex-wrap gap-4 lg:justify-end">
            <a
              href="#companies"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105"
            >
              Explore backed companies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#model"
              className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Discover our approach
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-primary-foreground/15 pt-6">
          <div className="fade-up delay-4 flex items-center gap-3 text-sm font-medium text-primary-foreground/70">
            <span className="font-display text-lg font-bold text-primary-foreground">
              01
            </span>
            <span className="hidden sm:inline">Belgium</span>
            <span className="text-accent">↔</span>
            <span className="hidden sm:inline">Nigeria</span>
          </div>

          <div className="fade-up delay-4 hidden text-sm font-medium text-primary-foreground/70 md:block">
            Built to power real-world progress
          </div>

          <a
            href="#who-we-are"
            className="fade-up delay-5 group flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <span className="hidden sm:inline">Scroll to discover</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 transition-transform group-hover:translate-y-1">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
