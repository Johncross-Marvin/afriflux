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

      // Total scrollable distance within the section
      const totalScroll = rect.height - viewportHeight;

      // How far we've scrolled into the section (0 at top, 1 at bottom)
      let raw = -rect.top / totalScroll;
      raw = Math.max(0, Math.min(1, raw));

      // Map to step index (0..3)
      const index = Math.min(
        steps.length - 1,
        Math.floor(raw * steps.length)
      );

      // Progress within the current step (0..1)
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
      className="relative bg-primary py-24 text-primary-foreground sm:py-32"
    >
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

        {/* Scroll-driven steps */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Sticky progress indicator */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-6">
              <div className="relative flex h-40 w-1.5 flex-col justify-between overflow-hidden rounded-full bg-primary-foreground/15">
                {/* Animated fill */}
                <div
                  className="absolute left-0 top-0 w-full rounded-full bg-accent transition-all duration-150 ease-out"
                  style={{
                    height: `${((activeIndex + progress) / steps.length) * 100}%`,
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-display text-7xl font-bold leading-none text-accent sm:text-8xl">
                  {steps[activeIndex].number}
                </span>
                <span className="text-sm font-medium text-primary-foreground/50">
                  / {steps.length.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Step content */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`transition-all duration-500 ${
                  i === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-accent">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-primary-foreground/15 p-8 sm:flex-row sm:items-center sm:justify-between">
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
