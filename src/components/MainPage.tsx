"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Import sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Provenance from "./sections/Provenance";
import QualityControl from "./sections/QualityControl";
import Catalog from "./sections/Catalog";
import Inquiry from "./sections/Inquiry";

export default function MainPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll for a high-end feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // physics-like momentum
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#F4F7F2] text-[#0B2014] overflow-x-hidden">
      {/* 1. Brand Navbar Navigation Header */}
      <Header />

      {/* 2. Main Content Sections (Full width sequential layout) */}
      <main className="relative z-10 w-full">
        <Hero />
        <Provenance />
        <QualityControl />
        <Catalog />
        <Inquiry />
      </main>
    </div>
  );
}
