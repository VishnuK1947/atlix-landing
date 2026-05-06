// TODO before launch: Add advisor logos (Cheryl, Patrick, Barry, Prof. Jay Wang),
// and "Currently piloting with [X]" once confirmed.

const logos = [
  { name: "University of Southern California", src: "/usclogo.png" },
  { name: "Google", src: "/googlelogo.png" },
  { name: "Bloomberg", src: "/bbglogo.png" },
  { name: "JP Morgan", src: "/jpmorganlogo.png" },
  // TODO: Add advisor logos with permission
];

export default function Credibility() {
  return (
    <section className="py-20 px-6 bg-[#0d1526] border-t border-[#1e3054]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4a6080] font-mono mb-10 text-center">
          Built by people from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.name}
              src={l.src}
              alt={l.name}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
