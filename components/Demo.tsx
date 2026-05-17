export default function Demo() {
  return (
    <section className="py-24 px-6 border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line" />
        <p className="text-xs uppercase tracking-[0.2em] text-[#6e8fac] font-mono mb-4">
          See It In Action
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eef1f6] mb-12 leading-snug max-w-xl">
          Watch GenAtlix work.
        </h2>
        <div className="border border-[#1e3054] bg-[#080e1a] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e3054]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
            <span className="ml-4 text-xs font-mono text-[#6e8fac]">
              genatlix / demo
            </span>
          </div>
          <video
            src="/atlixdemo.mp4"
            controls
            playsInline
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
