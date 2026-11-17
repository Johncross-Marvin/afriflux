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
    <div className="overflow-hidden border-y border-border bg-secondary/50 py-5">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70"
          >
            {item}
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
