"use client";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function InvestorModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real endpoint (Resend / Loops / Formspree)
    await fetch("/api/investor-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    }).catch(() => null);
    setLoading(false);
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#05090f]/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-md bg-[#0d1526] border border-[#1e3054] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4a6080] hover:text-[#dde3ed] transition-colors text-lg leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-[#c8922a] font-mono mb-2">
          Investor Inquiry
        </p>
        <h2 className="text-xl font-semibold text-[#eef1f6] mb-1">
          Let's talk.
        </h2>
        <p className="text-sm text-[#637da0] mb-6 leading-relaxed">
          We're raising from mission-aligned funds. Send us a note and we'll
          follow up directly.
        </p>

        {submitted ? (
          <div className="border border-[#c8922a]/40 bg-[#c8922a]/5 p-5">
            <p className="text-sm text-[#c8922a] font-mono">
              Message received. We'll follow up within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#4a6080] font-mono uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@fund.com"
                className="w-full bg-[#080e1a] border border-[#1e3054] focus:border-[#c8922a] text-[#dde3ed] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#344d68]"
              />
            </div>
            <div>
              <label className="block text-xs text-[#4a6080] font-mono uppercase tracking-wider mb-1.5">
                Message (optional)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Fund name, thesis fit, questions..."
                className="w-full bg-[#080e1a] border border-[#1e3054] focus:border-[#c8922a] text-[#dde3ed] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#344d68] resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c8922a] hover:bg-[#d9a84a] disabled:opacity-50 text-[#05090f] font-medium text-sm py-3 transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
