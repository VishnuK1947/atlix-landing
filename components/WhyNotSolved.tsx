const competitors = [
  {
    name: "Brandwatch / Meltwater",
    description:
      "Built for CMOs tracking brand mentions. The data model, the UI, and the output are designed around marketing workflows — not policy teams tracking how ideas spread and harden.",
  },
  {
    name: "Primer / Dataminr",
    description:
      "Institutional-grade intelligence, priced for the Pentagon. $100K–$500K+ contracts, procured through cleared channels. Not accessible to a state legislature or an NGO research team.",
  },
  {
    name: "McKinsey-style consulting",
    description:
      "Six-figure static reports that arrive weeks after the narrative has already peaked, polarized, and moved on. Backward-looking by design.",
  },
];

export default function WhyNotSolved() {
  return (
    <section className="py-24 px-6 bg-[#0d1526] border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#6e8fac] font-mono mb-4">
          The Landscape
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-4 leading-snug max-w-2xl">
          Why hasn't this been solved?
        </h2>
        <p className="text-[#8fa4be] mb-12 max-w-xl">
          The existing tools either serve the wrong customer or cost an order of
          magnitude too much.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e3054]">
          {competitors.map((c) => (
            <div key={c.name} className="bg-[#0d1526] p-8">
              <p className="text-sm font-semibold text-[#dde3ed] mb-3">
                {c.name}
              </p>
              <p className="text-sm text-[#9bb5cc] leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#c8922a] pl-6 py-1">
          <p className="text-[#dde3ed] leading-relaxed">
            Atlix sits in the middle. Policy-grade intelligence at NGO-accessible
            pricing, built native for narrative — not retrofit from a marketing
            tool.
          </p>
        </div>
      </div>
    </section>
  );
}
