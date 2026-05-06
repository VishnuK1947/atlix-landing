export default function Footer() {
  return (
    <footer className="border-t border-[#1e3054] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#dde3ed]">Atlix</p>
          <p className="text-xs text-[#4a6080] mt-1">
            Real-time narrative intelligence for institutional decision-makers.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <a
            href="mailto:jyangccbb13@gmail.com"
            className="text-xs text-[#4a6080] hover:text-[#8fa4be] transition-colors font-mono"
          >
            dhan6663@usc.edu
          </a>
          <p className="text-xs text-[#344d68] font-mono">© 2026 Atlix</p>
        </div>
      </div>
    </footer>
  );
}
