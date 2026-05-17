const audiences = [
  {
    label: "Local Candidates",
    description: "Know what your district is talking about before you set your platform.",
  },
  {
    label: "Campaign Managers",
    description: "Get a daily read on the issues moving your target voters, mapped to the neighborhoods you need to win.",
  },
  {
    label: "Political Consultants",
    description: "Run tighter campaigns with district-level intelligence on emerging issues and shifting sentiment.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 px-6 border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#6e8fac] font-mono mb-4">
          Who It's For
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-16 leading-snug max-w-xl">
          Built for the people running local campaigns, and the consultants
          behind them.
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
              <p className="text-sm text-[#8fa4be] leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
