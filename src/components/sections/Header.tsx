"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#F7F9F5]/90 backdrop-blur-md border-b border-[#225D38]/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo matching user upload */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3.5 cursor-pointer group"
          id="logo-trigger"
        >
          {/* Logo Text on the left */}
          <div className="flex flex-col select-none text-left font-sans">
            <span className="text-xl font-extrabold tracking-tight text-[#0E4729] leading-none transition-colors duration-300 group-hover:text-[#78B928]">
              Heron
            </span>
            <span className="text-xl font-extrabold tracking-tight text-[#78B928] leading-none mt-1 transition-colors duration-300 group-hover:text-[#0E4729]">
              Fresh
            </span>
          </div>

          {/* SVG Logo Icon on the right */}
          <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#0E4729]"
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

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Sourcing & Origin", id: "provenance" },
            { name: "Quality Standards", id: "quality" },
            { name: "Cold Chain", id: "cold-chain" },
            { name: "Catalog", id: "catalog" },
            { name: "B2B Inquiry", id: "inquiry" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold tracking-wide text-[#333C37]/80 hover:text-[#225D38] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#225D38] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            id="header-rfq-btn"
            onClick={() => scrollToSection("inquiry")}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#0F4C2A] to-[#74B72E] hover:from-[#74B72E] hover:to-[#0F4C2A] text-[#F4F7F2] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#74B72E]/10 hover:shadow-lg hover:-translate-y-[1px]"
          >
            <span>Request RFQ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
