const principles = [
  {
    title: "Insights, not just data.",
    description: "Surface which issues are gaining momentum with young voters and where to focus your message next.",
  },
  {
    title: "Geographic precision.",
    description: "Narratives filtered by district, region, or country so your field team sees exactly what you see.",
  },
  {
    title: "Bias-aware by design.",
    description: "Transparent about sample composition — comparative context, not just raw signal.",
  },
];

export default function PolicyWorkflows() {
  return (
    <section className="py-24 px-6 bg-[#0d1526] border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="accent-line" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#6e8fac] font-mono mb-4">
              How It Works
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] leading-snug">
              Built to be honest about what the data can and can't tell you.
            </h2>
          </div>
          <div className="space-y-8">
            {principles.map((p, i) => (
              <div key={i} className="border-l border-[#1e3054] pl-6">
                <h3 className="text-sm font-semibold text-[#dde3ed] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#9bb5cc] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
