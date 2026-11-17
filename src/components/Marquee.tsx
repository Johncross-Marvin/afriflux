const items = [
  "Strategic Capital",
  "Youth Enterprise",
  "Sustainable Agriculture",
  "Clean Energy",
  "Measurable Impact",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#071D24] py-4">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
          >
            {item}
            <span className="text-[#E9B850]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
