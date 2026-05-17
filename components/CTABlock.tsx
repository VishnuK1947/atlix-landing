export default function CTABlock() {
  return (
    <section
      id="demo"
      className="py-24 px-6 border-t border-[#1e3054] bg-[#080e1a]"
    >
      <div className="max-w-2xl mx-auto">
        <div className="accent-line" />
        <h2 className="text-2xl font-semibold text-[#eef1f6] mb-2">
          Request a Demo
        </h2>
        <p className="text-sm text-[#9bb5cc] mb-8 leading-relaxed">
          For local campaigns and political consultants. A 30-minute walkthrough
          tailored to your race and district.
        </p>
        <a
          href="https://calendly.com/ericye530/30-minutes?month=2026-05"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-[#c8922a] hover:bg-[#d9a84a] text-[#05090f] font-medium text-sm py-3 transition-colors"
        >
          Schedule a 30-Minute Demo
        </a>
      </div>
    </section>
  );
}
