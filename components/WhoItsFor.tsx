const audiences = [
  {
    label: "Policymaker Offices",
    description:
      "Daily narrative briefings filtered to your district. Know what your constituents are reading, saying, and reacting to — before your field reps do.",
    detail: "Supplements field intelligence. Does not replace it.",
  },
  {
    label: "NGOs & Think Tanks",
    description:
      "Track narratives across regions and platforms without standing up your own monitoring team. Research-grade output at a fraction of the institutional cost.",
    detail: "No cleared channels required.",
  },
  {
    label: "Institutional Comms",
    description:
      "Detect emerging crises early enough to shape the response — not just to issue statements after the narrative has already moved.",
    detail: "From reactive to anticipatory.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 px-6 border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#4a6080] font-mono mb-4">
          Who It's For
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-16 leading-snug max-w-xl">
          Not for marketers. Built for the people whose institutions depend on
          getting this right.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="p-8 border border-[#1e3054] hover:border-[#2a4570] transition-colors"
            >
              <h3 className="text-sm font-semibold text-[#c8922a] uppercase tracking-wider mb-4 font-mono">
                {a.label}
              </h3>
              <p className="text-sm text-[#8fa4be] leading-relaxed mb-4">
                {a.description}
              </p>
              <p className="text-xs text-[#4a6080] font-mono">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
