import { ArrowUpRight, Check } from "lucide-react";

export function CompaniesSection() {
  return (
    <section id="companies" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#126F4C]">03 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#738184]">
            Backed companies
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#122730] sm:text-5xl lg:text-6xl">
            Different ventures.
            <br />
            One <span className="text-[#126F4C]">shared</span>
            <br />
            ambition.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-[#738184] sm:text-lg">
            Explore the AfriFlux-backed companies advancing practical solutions
            in agriculture and the clean-energy transition.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Poulber card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#E5EBE7] bg-white">
            <div className="relative h-64 overflow-hidden sm:h-72">
              <img
                src="/20260629_135907.jpg.jpeg"
                alt="Poulber team members at a poultry training and farm session"
                className="h-full w-full object-cover object-top"
                style={{ filter: "contrast(1.04) saturate(0.93)" }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#122730] backdrop-blur">
                Agritech & Farming
              </span>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#126F4C]">
                AfriFlux-backed company
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold text-[#122730]">
                Poulber <span className="text-[#126F4C]">Africa.</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#738184]">
                A farm-management and poultry-production platform designed to
                give young people a practical way into commercial poultry
                farming.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Start poultry farming with ₦0 upfront farm capital*",
                  "Farms, birds and operational support",
                  "Technology-enabled farm management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#126F4C]/10 text-[#126F4C]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[#122730]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.poulber.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-between rounded-xl bg-[#0B6348] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0B6348]/90"
              >
                Explore Poulber
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Ecoflux card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#E5EBE7] bg-white">
            <div className="relative h-64 overflow-hidden sm:h-72">
              <img
                src="/FB_IMG_1769844190597.jpg.jpeg"
                alt="AfriFlux representative presenting Ecoflux at a public event"
                className="h-full w-full object-cover object-top"
                style={{ filter: "contrast(1.04) saturate(0.93)" }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#122730] backdrop-blur">
                Renewable Energy
              </span>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#126F4C]">
                AfriFlux-backed company
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold text-[#122730]">
                Ecoflux <span className="text-[#126F4C]">Nigeria.</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#738184]">
                Clean-energy and sustainability solutions focused on expanding
                access to renewable technologies and supporting energy
                transition.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Solar and renewable-energy solutions",
                  "Practical technologies for enterprises",
                  "Cleaner, more resilient systems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#126F4C]/10 text-[#126F4C]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[#122730]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.ecofluxng.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-between rounded-xl bg-[#0B6348] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0B6348]/90"
              >
                Visit Ecoflux website
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[#738184]">
          *Poulber's ₦0 entry proposition refers to no upfront farm
          infrastructure or stock capital for selected participants. The
          programme remains subject to availability, eligibility and final
          terms. Imagery is illustrative, not documentary.
        </p>
      </div>
    </section>
  );
}
