const principles = [
  {
    title: "An information tool, not a recommendation engine.",
    description:
      "Atlix surfaces what's happening. Policy decisions stay with policymakers. The platform shows you the shape of the conversation — it does not tell you what to do about it.",
  },
  {
    title: "Geographic precision.",
    description:
      "Narratives filtered by district, region, or country — because national sentiment is not constituent sentiment. Your field reps see the same geography you're monitoring.",
  },
  {
    title: "Bias-aware by design.",
    description:
      "Online discourse skews. Atlix is transparent about sample composition and provides comparative context, not just raw signal. We surface the shape of the gap, not just the signal.",
  },
];

export default function PolicyWorkflows() {
  return (
    <section className="py-24 px-6 bg-[#0d1526] border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="accent-line" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#4a6080] font-mono mb-4">
              Built for Policy Workflows
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] leading-snug">
              Designed for institutional trust, not just speed.
            </h2>
          </div>
          <div className="space-y-8">
            {principles.map((p, i) => (
              <div key={i} className="border-l border-[#1e3054] pl-6">
                <h3 className="text-sm font-semibold text-[#dde3ed] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#637da0] leading-relaxed">
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
