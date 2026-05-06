"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080e1a]/95 backdrop-blur-sm border-b border-[#1e3054]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/atlixlogo.png"
          alt="Atlix"
          width={96}
          height={32}
          className="h-7 w-auto object-contain"
          priority
        />
        <div className="flex items-center gap-6">
          <a
            href="#demo"
            className="text-sm text-[#8fa4be] hover:text-[#dde3ed] transition-colors"
          >
            Request Demo
          </a>
          <a
            href="#investors"
            className="text-sm border border-[#c8922a] text-[#c8922a] hover:bg-[#c8922a]/10 px-4 py-1.5 transition-colors"
          >
            For Investors
          </a>
        </div>
      </div>
    </nav>
  );
}
