const capabilities = [
  {
    number: "01",
    title: "See What Your District Cares About",
    description: "Surface the issues gaining traction among your constituents before you step on stage.",
    tag: "Discovery",
  },
  {
    number: "02",
    title: "Ask the Chatbot What to Focus On",
    description: "Query your district's data directly to find where young voter energy is concentrated.",
    tag: "Chatbot",
  },
  {
    number: "03",
    title: "Walk Away with a Playbook",
    description: "Turn insights into ready-made social posts, email templates, and ad copy in one click.",
    tag: "Action",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#6e8fac] font-mono mb-4">
          What GenAtlix Does
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-16 leading-snug max-w-xl">
          From issue discovery to campaign-ready materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.number} className="group">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-mono font-light text-[#3a5a8a] group-hover:text-[#5a7aaa] transition-colors">
                  {cap.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8922a] border border-[#c8922a]/30 px-2 py-0.5">
                  {cap.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#eef1f6] mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-[#9bb5cc] leading-relaxed">
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
