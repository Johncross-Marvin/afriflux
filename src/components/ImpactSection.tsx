const pillars = [
  "Youth enterprise",
  "Sustainable food systems",
  "Clean-energy adoption",
  "Traceability & accountability",
];

export function ImpactSection() {
  return (
    <section id="impact" className="relative overflow-hidden py-24 text-white sm:py-32">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/20260629_135657.jpg.jpeg"
          alt="Technician working beneath installed solar panels"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,29,36,0.95) 0%, rgba(7,29,36,0.75) 45%, rgba(7,29,36,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#E9B850]">05 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
            Long-term impact
          </span>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Progress should
            <br />
            be <span className="text-[#E9B850]">visible.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Our ambition goes beyond access to capital. It is about the
            opportunities built, assets activated and livelihoods strengthened
            along the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
