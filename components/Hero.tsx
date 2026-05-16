"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-24 px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,48,84,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(30,48,84,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,21,38,0) 0%, rgba(8,14,26,0.85) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="fade-up fade-up-delay-1 text-xs uppercase tracking-[0.2em] text-[#c8922a] font-mono mb-6">
            Narrative Intelligence Platform
          </p>
          <h1 className="fade-up fade-up-delay-2 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-[#eef1f6] mb-6">
            Narrative intelligence for the people who have to respond.
          </h1>
          <p className="fade-up fade-up-delay-3 text-lg text-[#8fa4be] leading-relaxed mb-10 max-w-2xl">
            GenAtlix tracks how narratives cluster, spread, and resonate — in
            real time, filtered to your district. Built for local campaigns that
            need to know what their constituents actually care about, especially
            young voters.
          </p>
          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/ericye530/30-minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#c8922a] hover:bg-[#d9a84a] text-[#05090f] font-medium text-sm transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>

        {/* Dashboard mock */}
        <div className="mt-20 fade-up fade-up-delay-4">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const bars = [72, 58, 84, 43, 91, 67, 79, 55, 88, 62, 76, 49, 93, 70, 61];

  return (
    <div className="border border-[#1e3054] bg-[#0d1526] overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e3054] bg-[#080e1a]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
        <span className="ml-4 text-xs font-mono text-[#4a6080]">
          genatlix / narrative-monitor / district-12
        </span>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Narrative cluster panel */}
        <div className="md:col-span-2 space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-[#4a6080] font-mono">
            Active Narrative Clusters — 7d rolling
          </p>
          <div className="space-y-2">
            {[
              {
                label: "Border / immigration enforcement",
                heat: 91,
                delta: "+12%",
              },
              {
                label: "Housing affordability, District 12",
                heat: 84,
                delta: "+7%",
              },
              { label: "Federal workforce reductions", heat: 72, delta: "+3%" },
              {
                label: "Infrastructure spending delay",
                heat: 55,
                delta: "-2%",
              },
              { label: "Public school funding cuts", heat: 43, delta: "-8%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex-1 text-xs text-[#8fa4be] truncate">
                  {item.label}
                </div>
                <div className="w-32 h-1.5 bg-[#111d33] flex-shrink-0">
                  <div
                    className="h-full bg-[#c8922a] transition-all"
                    style={{
                      width: `${item.heat}%`,
                      opacity: item.heat / 100 + 0.3,
                    }}
                  />
                </div>
                <div
                  className={`text-[10px] font-mono w-10 text-right flex-shrink-0 ${
                    item.delta.startsWith("+")
                      ? "text-[#c8922a]"
                      : "text-[#4a6080]"
                  }`}
                >
                  {item.delta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Polarization index */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-[#4a6080] font-mono">
            Polarization Index
          </p>
          <div className="flex items-end gap-0.5 h-20">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  height: `${h}%`,
                  backgroundColor:
                    i === bars.length - 1
                      ? "#c8922a"
                      : `rgba(200,146,42,${0.2 + (h / 100) * 0.4})`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#4a6080]">
            <span>-14d</span>
            <span>today</span>
          </div>
          <div className="border-t border-[#1e3054] pt-3">
            <p className="text-[10px] text-[#4a6080] font-mono">Current</p>
            <p className="text-2xl font-semibold text-[#c8922a] font-mono">
              0.87
            </p>
            <p className="text-[10px] text-[#c8922a] font-mono">Hardening ↑</p>
          </div>
        </div>
      </div>
    </div>
  );
}
