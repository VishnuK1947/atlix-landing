const capabilities = [
  {
    number: "01",
    title: "Narrative Clustering",
    description:
      "See which communities are forming around an idea and how concentrated they are across your constituents and districts. Not keyword tracking — narrative tracking.",
    tag: "Clustering",
  },
  {
    number: "02",
    title: "Cross-Platform Geographic Spread",
    description:
      "Watch a narrative move from a regional forum to a national platform, filtered to the district or region you care about. Real-time, not weekly reports.",
    tag: "Geographic",
  },
  {
    number: "03",
    title: "Polarization Index",
    description:
      "Measure whether two sides are hardening or whether the conversation among constituents is still diffuse. Week-over-week trending with district-level resolution.",
    tag: "Polarization",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#4a6080] font-mono mb-4">
          What Atlix Does
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-16 leading-snug max-w-xl">
          Three capabilities. No noise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.number} className="group">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-mono font-light text-[#1e3054] group-hover:text-[#2a4570] transition-colors">
                  {cap.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8922a] border border-[#c8922a]/30 px-2 py-0.5">
                  {cap.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#eef1f6] mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-[#637da0] leading-relaxed">
                {cap.description}
              </p>
              <div className="mt-6 h-px bg-[#1e3054] group-hover:bg-[#c8922a]/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
