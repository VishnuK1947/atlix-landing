// TODO before launch: Add USC logo, advisor logos (Cheryl, Patrick, Barry, Prof. Jay Wang),
// and "Currently piloting with [X]" once confirmed. Remove this section entirely if empty.

const credentials = [
  {
    name: "University of Southern California",
    type: "Academic Affiliation",
    logo: null, // TODO: supply /public/usc-logo.png
  },
  // TODO: Add advisor logos with permission
  // { name: "Cheryl [Last Name]", type: "Advisor", logo: null },
  // { name: "Patrick [Last Name]", type: "Advisor", logo: null },
  // { name: "Prof. Jay Wang", type: "Academic Advisor", logo: null },
];

export default function Credibility() {
  return (
    <section className="py-20 px-6 bg-[#0d1526] border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4a6080] font-mono mb-10 text-center">
          Backed By / Built At
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {credentials.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
                />
              ) : (
                <div className="border border-[#1e3054] px-6 py-3 text-xs text-[#4a6080] font-mono">
                  {c.name}
                </div>
              )}
              <span className="text-[10px] text-[#344d68] uppercase tracking-widest font-mono">
                {c.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
