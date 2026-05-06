"use client";

import { useState } from "react";
import InvestorModal from "./InvestorModal";

export default function CTABlock() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real endpoint (Resend / Loops / Formspree)
    await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, org }),
    }).catch(() => null);
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <section
        id="demo"
        className="py-24 px-6 border-t border-[#1e3054] bg-[#080e1a]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Demo request */}
          <div>
            <div className="accent-line" />
            <h2 className="text-2xl font-semibold text-[#eef1f6] mb-2">
              Request a Demo
            </h2>
            <p className="text-sm text-[#637da0] mb-8 leading-relaxed">
              For policymaker offices, NGOs, and institutional comms teams. A
              30-minute walkthrough tailored to your workflow.
            </p>

            {submitted ? (
              <div className="border border-[#c8922a]/40 bg-[#c8922a]/5 p-6">
                <p className="text-sm text-[#c8922a] font-mono">
                  Request received. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#4a6080] font-mono uppercase tracking-wider mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@agency.gov"
                    className="w-full bg-[#0d1526] border border-[#1e3054] focus:border-[#c8922a] text-[#dde3ed] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#344d68]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#4a6080] font-mono uppercase tracking-wider mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Office of Sen. / NGO / Agency"
                    className="w-full bg-[#0d1526] border border-[#1e3054] focus:border-[#c8922a] text-[#dde3ed] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#344d68]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c8922a] hover:bg-[#d9a84a] disabled:opacity-50 text-[#05090f] font-medium text-sm py-3 transition-colors"
                >
                  {loading ? "Sending..." : "Request Demo"}
                </button>
              </form>
            )}
          </div>

          {/* Investor path */}
          <div className="flex flex-col justify-center">
            <div className="border border-[#1e3054] p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c8922a] font-mono mb-4">
                For Investors
              </p>
              <h3 className="text-lg font-semibold text-[#eef1f6] mb-3">
                Mission-aligned capital only.
              </h3>
              <p className="text-sm text-[#637da0] leading-relaxed mb-6">
                We are building for In-Q-Tel, Schmidt Futures, a16z American
                Dynamism, and aligned funds. If that is your thesis, we want to
                talk.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm text-[#c8922a] border border-[#c8922a]/40 hover:border-[#c8922a] px-5 py-2.5 transition-colors"
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>
      </section>

      <InvestorModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
