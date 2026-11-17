import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#071D24] text-white"
    >
      {/* Background image with cinematic gradient */}
      <div className="absolute inset-0">
        <img
          src="/Modern Conference Stage Presentation.png"
          alt="AfriFlux conference presentation"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,29,36,0.20) 0%, rgba(7,29,36,0.58) 43%, rgba(7,29,36,0.92) 76%, rgba(7,29,36,0.97) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071D24] via-transparent to-[#071D24]/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          {/* Left: mostly empty to let photo show */}
          <div className="hidden lg:block" />

          {/* Right: headline */}
          <div>
            <div className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#126F4C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Investment Advisory · Sustainable Enterprise
              </span>
            </div>

            <h1 className="fade-up delay-1 font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[80px]">
              <span className="text-white">Capital with</span>
              <br />
              <span className="text-white">a purpose.</span>
              <br />
              <span className="text-[#E9B850]">Impact with</span>
              <br />
              <span className="text-[#E9B850]">a future.</span>
            </h1>

            <p className="fade-up delay-2 mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              We connect European capital with Africa's next generation of
              productive businesses—bringing together strategy, asset-focused
              financing and local ambition.
            </p>

            <div className="fade-up delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="#companies"
                className="group inline-flex items-center gap-2 rounded-full bg-[#E9B850] px-6 py-3.5 text-sm font-semibold text-[#071D24] transition-all hover:brightness-105"
              >
                Explore backed companies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#model"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Discover our approach
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="fade-up delay-4 mt-8 flex items-center gap-4 text-xs font-medium text-white/50">
              <span>Belgium ↔ Nigeria</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Built to power real-world progress</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#who-we-are"
          className="fade-up delay-5 group absolute bottom-6 right-5 hidden items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-white sm:right-8 lg:flex"
        >
          Scroll to discover
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-transform group-hover:translate-y-1">
            <ArrowDown className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
