import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScroll = rect.height - viewportHeight;
      let raw = -rect.top / totalScroll;
      raw = Math.max(0, Math.min(1, raw));
      const index = Math.min(steps.length - 1, Math.floor(raw * steps.length));
      const stepProgress = (raw * steps.length) % 1;
      setActiveIndex(index);
      setProgress(stepProgress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="model"
      ref={sectionRef}
      className="relative overflow-hidden py-24 text-white sm:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 25% 45%, #10463B 0%, #092B30 38%, #051B25 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#E9B850]">04 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
            Our approach
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              A clearer way
              <br />
              to move <span className="text-[#E9B850]">capital.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Our proposed model is built around a simple idea: finance
              specific, productive assets rather than handing over unrestricted
              capital, and track those assets as they generate value.
            </p>

            {/* Orbit graphic */}
            <div className="relative mt-12 hidden h-64 w-64 lg:block">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/favicon.png"
                  alt="AfriFlux mark"
                  className="h-12 w-12 object-contain opacity-80"
                />
              </div>
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9B850]" />
              <span className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-[#126F4C]" />
              <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#E9B850]/70" />
            </div>
          </div>

          {/* Right column: timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute bottom-4 left-[7px] top-4 w-px bg-white/15" />
            {/* Progress fill */}
            <div
              className="absolute left-[7px] top-4 w-px bg-[#E9B850] transition-all duration-150 ease-out"
              style={{
                height: `${((activeIndex + progress) / steps.length) * 100}%`,
              }}
            />

            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative pl-10 transition-all duration-500 ${
                    i === activeIndex
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      i <= activeIndex
                        ? "border-[#E9B850] bg-[#E9B850]"
                        : "border-white/30 bg-transparent"
                    }`}
                  >
                    {i <= activeIndex && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#071D24]" />
                    )}
                  </span>

                  <span className="font-display text-sm font-bold text-[#E9B850]">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/favicon.png"
              alt="AfriFlux logo mark"
              className="h-12 w-12 object-contain"
            />
            <p className="text-sm text-white/60">
              Investment structures remain proposed and subject to legal and
              regulatory approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
