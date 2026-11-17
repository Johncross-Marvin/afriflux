import { ArrowUpRight } from "lucide-react";

export function IdeaSection() {
  return (
    <section id="who-we-are" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#126F4C]">01 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#738184]">
            The AfriFlux Idea
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + copy */}
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#122730] sm:text-5xl lg:text-6xl">
              Big ambition needs
              <br />
              a <span className="text-[#126F4C]">better</span>
              <br />
              <span className="text-[#126F4C]">bridge.</span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-[#738184] sm:text-lg">
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
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-[#126F4C] pb-1 text-base font-semibold text-[#126F4C] transition-colors hover:text-[#0B6348]"
            >
              What we bring to the table
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right: image with badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/IMG_20260224_175911_977.png"
                alt="AfriFlux representatives with international partners at an industry event"
                className="h-[420px] w-full object-cover object-top sm:h-[520px]"
                style={{ filter: "contrast(1.04) saturate(0.93)" }}
              />
            </div>

            {/* Info badge */}
            <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-[#0B2C2B] px-6 py-5 shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9B850]/20">
                <img src="/favicon.png" alt="AfriFlux mark" className="h-6 w-6 object-contain" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Our connection
                </span>
                <p className="font-display text-lg font-bold text-white">
                  Capital meets capability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo gallery strip */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/IMG-20260206-WA0011.jpg.jpeg"
              alt="AfriFlux, Poulber and Ecoflux activities"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
              style={{ filter: "contrast(1.04) saturate(0.93)" }}
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/20260629_141821.jpg.jpeg"
              alt="AfriFlux, Poulber and Ecoflux project environment"
              className="h-56 w-full object-cover object-top transition-transform duration-500 hover:scale-105 sm:h-64"
              style={{ filter: "contrast(1.04) saturate(0.93)" }}
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/IMG_20260224_175925_873.png"
              alt="AfriFlux, Poulber and Ecoflux team"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
              style={{ filter: "contrast(1.04) saturate(0.93)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
