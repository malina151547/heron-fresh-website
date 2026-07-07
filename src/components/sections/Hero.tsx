"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  tag: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: "/images/hero_orchard.jpg",
      tag: "Pristine Orchard Origin Base",
      title: "Nurtured by Nature",
      subtitle: "High-altitude valley terraces at 26°N latitude, boasting 2,600+ hours of natural sunlight for peak sugar accumulation.",
    },
    {
      image: "/images/pomegranate_exterior.jpg",
      tag: "Signature Selection: Huili Pomegranate",
      title: "Sichuan Soft-Seed",
      subtitle: "Premium punica granatum featuring thick, ruby-red arils with completely edible soft seeds and 17°+ Brix sweetness.",
    },
    {
      image: "/images/shine_muscat.jpg",
      tag: "Premium Muscat Grapes",
      title: "Shine Muscat",
      subtitle: "Crisp green seedless grapes with a rich muscat aroma, double-sleeved protective packaging, and continuous cold-chain load.",
    },
    {
      image: "/images/honey_citrus.jpg",
      tag: "Ultra-Premium Hybrid Citrus",
      title: "Honey Citrus",
      subtitle: "Ehime No. 38 hybrid citrus featuring paper-thin skin enclosing melting, jelly-like sweet pulp optimized for overseas delivery.",
    },
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToInquiry = () => {
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#F4F7F2]"
    >
      {/* 1. Full-Bleed Slide Backgrounds with Ken Burns zoom effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Sophisticated Text Protection Gradients */}
        {/* Desktop: Seamless Left-to-Right Light Cream Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7F2] via-[#F4F7F2]/90 to-[#F4F7F2]/20 z-10 hidden lg:block" />
        {/* Mobile: Full-Screen Overlay with slightly higher opacity */}
        <div className="absolute inset-0 bg-[#F4F7F2]/85 sm:bg-[#F4F7F2]/75 z-10 lg:hidden" />
      </div>

      {/* 2. Main Hero Overlay Content */}
      <div className="max-w-7xl mx-auto px-6 w-full z-20 pt-24 pb-16 relative flex items-center min-h-screen">
        <div className="max-w-2xl flex flex-col items-start text-left select-text">
          {/* Animated Slide Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C2A]/10 border border-[#0F4C2A]/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#74B72E] animate-ping" />
            <span className="text-[10px] font-bold tracking-widest text-[#0F4C2A] uppercase">
              {slides[currentSlide].tag}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0B2014] leading-[1.05] mb-6">
            Redefining <br />
            <span className="bg-gradient-to-r from-[#0F4C2A] via-[#74B72E] to-[#0F4C2A] bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#0B2014]/90 max-w-xl mb-8 leading-relaxed font-light transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>

          {/* Core Trust Indicators */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
            <div className="flex items-center gap-3 bg-[#0F4C2A]/5 border border-[#0F4C2A]/15 rounded-xl p-3.5 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-[#0F4C2A] flex-shrink-0" />
              <div>
                <h3 className="text-xs font-bold uppercase text-[#0F4C2A] tracking-wider">
                  GlobalG.A.P.
                </h3>
                <p className="text-[10px] text-[#0B2014]/60">100% Certified Farms</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#0F4C2A]/5 border border-[#0F4C2A]/15 rounded-xl p-3.5 backdrop-blur-md">
              <RefreshCw className="w-6 h-6 text-[#0F4C2A] flex-shrink-0" />
              <div>
                <h3 className="text-xs font-bold uppercase text-[#0F4C2A] tracking-wider">
                  Active Temp Box
                </h3>
                <p className="text-[10px] text-[#0B2014]/60">Constant cold preservation</p>
              </div>
            </div>
          </div>

          {/* CTA Trigger */}
          <button
            id="hero-cta-btn"
            onClick={scrollToInquiry}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0F4C2A] to-[#74B72E] hover:from-[#74B72E] hover:to-[#0F4C2A] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#74B72E]/10 border border-[#74B72E]/10 hover:-translate-y-[2px]"
          >
            <span>Explore Supply Capability</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* 3. Slider Controls (Indicators at the bottom) */}
      <div className="absolute bottom-8 right-6 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "w-8 bg-[#0F4C2A]"
                : "w-2.5 bg-[#0F4C2A]/20 hover:bg-[#0F4C2A]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
