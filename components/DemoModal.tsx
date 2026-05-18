"use client";

import { useState, useEffect, useRef } from "react";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 border border-[#1e3054] hover:border-[#c8922a] text-[#8fa4be] hover:text-[#c8922a] text-sm font-mono transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
        Watch Demo
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl border border-[#1e3054] bg-[#080e1a] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e3054] bg-[#080e1a]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e3054]" />
                <span className="ml-4 text-xs font-mono text-[#4a6080]">
                  Atlix / demo
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#4a6080] hover:text-[#eef1f6] transition-colors text-lg leading-none"
              >
                ×
              </button>
            </div>
            <video
              ref={videoRef}
              src="/atlixdemo.mp4"
              controls
              autoPlay
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}
