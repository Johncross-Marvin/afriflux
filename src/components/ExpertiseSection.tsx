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
    <section id="expertise" className="bg-[#F5F7F3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#126F4C]">02 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#738184]">
            What we do
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#122730] sm:text-5xl lg:text-6xl">
            More than finance.
            <br />
            A <span className="text-[#126F4C]">complete</span>
            <br />
            perspective.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-[#738184] sm:text-lg">
            Support that starts with a sound opportunity and follows it through
            to accountable, productive operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            return (
              <div
                key={service.number}
                className="group flex flex-col justify-between rounded-2xl border border-[#E5EBE7] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#126F4C]/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-[#126F4C]">
                      {service.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7F3]">
                      <img
                        src="/favicon.png"
                        alt="AfriFlux mark"
                        className="h-6 w-6 object-contain"
                      />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-[#122730]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#738184]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#E5EBE7] pt-5">
                  <a
                    href="#connect"
                    className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#126F4C] transition-colors hover:text-[#0B6348]"
                  >
                    {service.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
