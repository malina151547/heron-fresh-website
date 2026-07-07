"use client";

import { useState, FormEvent } from "react";
import { Download, Send, Globe, Mail, Phone, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [port, setPort] = useState("");
  const [desk, setDesk] = useState("North American Trade Desk");
  const [program, setProgram] = useState("Annual Fixed Contract");
  const [product, setProduct] = useState("Pomegranate");
  const [volume, setVolume] = useState("1x40ft RF");
  const [requirements, setRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !port) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          port,
          desk,
          program,
          product,
          volume,
          requirements,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit RFQ");
      }

      setSubmitted(true);

      // Premium Confetti Burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#459A26", "#225D38", "#F7F9F5", "#D4AF37"],
      });

      // Reset after delay
      setTimeout(() => {
        setName("");
        setEmail("");
        setPort("");
        setRequirements("");
        setSubmitted(false);
      }, 4500);
    } catch (err) {
      console.error(err);
      alert("There was an error sending your RFQ. Please try again or email us directly at trade@heronfresh.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="inquiry-wrapper" className="relative w-full bg-[#F7F9F5] select-text">
      {/* RFQ Form Section */}
      <section id="inquiry" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Compliance & Document Downloads */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            <span className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-2 block">
              04 / B2B Solutions Desk
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#333C37] leading-tight mb-6">
              Start Your <br />
              <span className="bg-gradient-to-r from-[#225D38] to-[#459A26] bg-clip-text text-transparent">
                Procurement
              </span>
            </h2>
            <p className="text-sm text-[#333C37]/75 font-light leading-relaxed mb-8">
              Heron Fresh is fully certified to export to high-standard retail markets in North America and Europe. Instant downloads of our compliance certificates are available below:
            </p>

            {/* Document download buttons */}
            <div className="flex flex-col gap-3">
              {[
                { name: "GlobalG.A.P. Certificate", size: "1.4 MB" },
                { name: "HACCP & BRCGS Compliance", size: "2.1 MB" },
                { name: "FDA Facility Registration Specs", size: "850 KB" },
              ].map((doc) => (
                <button
                  key={doc.name}
                  onClick={() => alert(`Downloading ${doc.name} sample file...`)}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#225D38]/5 border border-[#225D38]/10 hover:border-[#225D38]/40 transition-colors duration-300 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#225D38]/10 flex items-center justify-center text-[#225D38] group-hover:scale-105 transition-transform">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#333C37]">
                        {doc.name}
                      </h4>
                      <span className="text-[9px] text-[#333C37]/45 uppercase tracking-wider">
                        PDF Format &bull; {doc.size}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#333C37]/30 group-hover:text-[#225D38] transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick contact information */}
          <div className="hidden lg:flex flex-col gap-3 border-t border-[#225D38]/10 pt-8 mt-8 text-xs font-light text-[#333C37]/60">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#225D38]" />
              <span>trade@heronfresh.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#225D38]" />
              <span>+86 028 8888 8888</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#225D38]" />
              <span>www.heronfresh.com</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive RFQ Form */}
        <div className="lg:col-span-7 bg-white border border-[#225D38]/15 rounded-3xl p-8 glass-panel relative overflow-hidden shadow-xl shadow-slate-100">
          {submitted ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#225D38]/10 border-2 border-[#225D38] flex items-center justify-center mb-6 animate-bounce">
                <Send className="w-6 h-6 text-[#225D38]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#333C37] mb-2">
                Request Sent Successfully
              </h3>
              <p className="text-sm text-[#333C37]/70 font-light max-w-sm">
                Thank you! Our Global Trade Desk will review your container specification requirements and contact you within 12 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="rfq-form" className="flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-[#333C37] border-b border-[#225D38]/10 pb-4 text-left">
                Submit Request for Quotation (RFQ)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="rfq-name" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Contact Name *
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] placeholder-[#333C37]/35 focus:outline-none focus:border-[#225D38] focus:ring-1 focus:ring-[#225D38] transition-colors"
                  />
                </div>

                {/* Corporate Email */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="rfq-email" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Corporate Email *
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. purchase@supermarket.com"
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] placeholder-[#333C37]/35 focus:outline-none focus:border-[#225D38] focus:ring-1 focus:ring-[#225D38] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Destination Port */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="rfq-port" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Destination Port *
                  </label>
                  <input
                    id="rfq-port"
                    type="text"
                    required
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    placeholder="e.g. Port of LA, Vancouver, Rotterdam"
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] placeholder-[#333C37]/35 focus:outline-none focus:border-[#225D38] focus:ring-1 focus:ring-[#225D38] transition-colors"
                  />
                </div>

                {/* B2B Trade Desk routing */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="rfq-desk" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Trade Desk Routing
                  </label>
                  <select
                    id="rfq-desk"
                    value={desk}
                    onChange={(e) => setDesk(e.target.value)}
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] focus:outline-none focus:border-[#225D38] transition-colors cursor-pointer"
                  >
                    <option value="North American Trade Desk">North American Desk (LA/Vancouver)</option>
                    <option value="European Trade Desk">European Desk (Rotterdam/Hamburg)</option>
                    <option value="Compliance Desk">Compliance Desk (GlobalG.A.P./Audit)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Supply Program type */}
                <div className="flex flex-col gap-1.5 text-left sm:col-span-1">
                  <label htmlFor="rfq-program" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Supply Program
                  </label>
                  <select
                    id="rfq-program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] focus:outline-none focus:border-[#225D38] transition-colors cursor-pointer"
                  >
                    <option value="Annual Fixed Contract">Annual Fixed Contract</option>
                    <option value="Private Label / OEM">Private Label / OEM</option>
                    <option value="Trial Shipment load">Trial Shipment load</option>
                  </select>
                </div>

                {/* Product Segment */}
                <div className="flex flex-col gap-1.5 sm:col-span-1 text-left">
                  <label htmlFor="rfq-product" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Category Selection
                  </label>
                  <select
                    id="rfq-product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] focus:outline-none focus:border-[#225D38] transition-colors cursor-pointer"
                  >
                    <option value="Pomegranate">Huili Pomegranate</option>
                    <option value="Muscat Grapes">Shine Muscat Grapes</option>
                    <option value="Honey Citrus">Honey Citrus</option>
                  </select>
                </div>

                {/* Target Volume */}
                <div className="flex flex-col gap-1.5 sm:col-span-1 text-left">
                  <label htmlFor="rfq-volume" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                    Order Volume
                  </label>
                  <select
                    id="rfq-volume"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] focus:outline-none focus:border-[#225D38] transition-colors cursor-pointer"
                  >
                    <option value="1x40ft RF">1x40ft Reefer FCL</option>
                    <option value="2-5x40ft RF">2-5x40ft Reefer FCL</option>
                    <option value="5x40ft+ RF">5x40ft+ Reefer FCL</option>
                    <option value="Trial Air LCL">Air Freight LCL</option>
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="rfq-requirements" className="text-[10px] text-[#225D38] font-bold uppercase tracking-wider">
                  Carton Customization & Grading Requirements
                </label>
                <textarea
                  id="rfq-requirements"
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Specify details: e.g. Private label box sizing, PLU labels, pallet wrapping, temperature logger curves, or specific quarantine audits..."
                  className="w-full bg-[#F7F9F5] border border-[#225D38]/20 rounded-xl px-4 py-3 text-sm text-[#333C37] placeholder-[#333C37]/35 focus:outline-none focus:border-[#225D38] focus:ring-1 focus:ring-[#225D38] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-rfq-btn"
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#225D38] to-[#459A26] hover:from-[#459A26] hover:to-[#225D38] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-[#225D38]/20 shadow-md shadow-[#459A26]/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Submitting specifications..." : "Submit RFQ Specifications"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Corporate Premium Footer */}
      <footer className="border-t border-[#225D38]/10 bg-[#225D38] py-12 select-text">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            {/* Logo Text on the left */}
            <div className="flex flex-col select-none text-left font-sans">
              <span className="text-lg font-extrabold tracking-tight text-[#F7F9F5] leading-none">
                Heron
              </span>
              <span className="text-lg font-extrabold tracking-tight text-[#459A26] leading-none mt-1">
                Fresh
              </span>
            </div>

            {/* SVG Logo Icon on the right */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#F7F9F5]"
              >
                {/* Outer circle */}
                <circle
                  cx="50"
                  cy="52"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                />
                
                {/* Overlapping inner curve representing the whole fruit on the right */}
                <path
                  d="M 50 16 C 68 28, 68 76, 50 88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Sliced fruit on the left */}
                <circle
                  cx="42"
                  cy="52"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                />
                <circle
                  cx="42"
                  cy="52"
                  r="2"
                  fill="currentColor"
                />
                {/* 8 spokes */}
                <path
                  d="M 22 52 L 39.5 52
                     M 44.5 52 L 62 52
                     M 42 32 L 42 49.5
                     M 42 54.5 L 42 72
                     M 28 38 L 39.5 49.5
                     M 44.5 54.5 L 56 66
                     M 28 66 L 39.5 54.5
                     M 44.5 49.5 L 56 38"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Skin pores (dots on the right) */}
                <circle cx="68" cy="44" r="1.5" fill="currentColor" />
                <circle cx="74" cy="52" r="1.5" fill="currentColor" />
                <circle cx="70" cy="62" r="1.5" fill="currentColor" />
                <circle cx="62" cy="70" r="1.5" fill="currentColor" />
                <circle cx="64" cy="36" r="1.5" fill="currentColor" />

                {/* Leaves sprouting at the top */}
                {/* Left Leaf */}
                <path
                  d="M 48 16 C 42 8, 36 10, 38 18 C 42 20, 46 19, 48 16 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 48 16 Q 43 13 38 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Right Leaf */}
                <path
                  d="M 52 16 C 60 6, 72 8, 70 20 C 64 22, 56 20, 52 16 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 52 16 Q 61 12 70 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col gap-2">
            <p className="text-[10px] text-[#F7F9F5]/50">
              &copy; {new Date().getFullYear()} Heron Fresh Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center md:justify-end text-[10px] text-[#F7F9F5]/50 font-light">
              <a href="#" className="hover:text-[#459A26] transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-[#459A26] transition-colors">Terms of Export</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
