"use client";

import { useEffect, useState } from "react";
import { Compass, ShieldCheck, ThermometerSnowflake, Wind, MapPin } from "lucide-react";

export default function ColdChain() {
  const [cargoProgress, setCargoProgress] = useState(0);

  // Animate the cargo progress along shipping path
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setCargoProgress((prev) => (prev + 0.002) % 1);
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Compute animated package location along quadratic bezier curve
  const getBezierPoint = (t: number) => {
    const x = (1 - t) * (1 - t) * 80 + 2 * (1 - t) * t * 250 + t * t * 420;
    const y = (1 - t) * (1 - t) * 140 + 2 * (1 - t) * t * 20 + t * t * 120;
    return { x, y };
  };

  const packagePos = getBezierPoint(cargoProgress);

  return (
    <section id="cold-chain" className="relative py-24 w-full select-text overflow-hidden bg-white">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#225D38]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16">
        {/* Title */}
        <div className="max-w-2xl text-left">
          <span className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-2 block">
            03 / Logistics & Temperature Protection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#333C37] leading-tight">
            The Golden Cold Chain: <br />
            <span className="bg-gradient-to-r from-[#225D38] to-[#459A26] bg-clip-text text-transparent">
              Zero-Fluctuation Transit
            </span>
          </h2>
          <p className="text-sm text-[#333C37]/80 font-light leading-relaxed mt-4 max-w-xl">
            Freshness is a race against respiration. We secure active pre-cooling within 4 hours of harvest, combined with Controlled Atmosphere (CA) ocean reefer bookings to protect shelf-life across intercontinental shipping routes.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Animated Global Route Map */}
          <div className="lg:col-span-7 bg-white border border-[#225D38]/10 rounded-3xl p-6 glass-panel flex flex-col items-center shadow-xl shadow-slate-100">
            <div className="w-full flex items-center justify-between border-b border-[#225D38]/10 pb-3 mb-4 text-xs font-bold text-[#225D38] tracking-wider uppercase">
              <span>Ocean Shipping Route Tracker</span>
              <span className="text-[10px] text-[#333C37]/40">Active Transit Path</span>
            </div>

            {/* Custom Interactive Map Container */}
            <div className="relative w-full aspect-[2/1] bg-[#F7F9F5] rounded-2xl border border-[#225D38]/10 overflow-hidden">
              {/* SVG Map Lines */}
              <svg viewBox="0 0 500 250" className="w-full h-full text-[#225D38]" preserveAspectRatio="none">
                {/* Pacific grid background */}
                <line x1="80" y1="20" x2="80" y2="230" stroke="#225D38" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.08" />
                <line x1="250" y1="20" x2="250" y2="230" stroke="#225D38" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.08" />
                <line x1="420" y1="20" x2="420" y2="230" stroke="#225D38" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.08" />

                {/* Shipping Route Path Curve */}
                <path
                  d="M 80,140 Q 250,20 420,120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  opacity="0.3"
                />
                <path
                  d="M 80,140 Q 250,20 420,120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="200"
                  strokeDashoffset={200 - cargoProgress * 200}
                  opacity="0.85"
                />

                {/* Node: Origin (Asia Orchard) */}
                <circle cx="80" cy="140" r="6" fill="#225D38" />
                <circle cx="80" cy="140" r="14" fill="none" stroke="#225D38" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s" }} />

                {/* Node: Destination (North America Port) */}
                <circle cx="420" cy="120" r="6" fill="#225D38" />
                <circle cx="420" cy="120" r="14" fill="none" stroke="#225D38" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDuration: "4s" }} />

                {/* Moving Container Icon */}
                <circle cx={packagePos.x} cy={packagePos.y} r="8" fill="#F7F9F5" filter="drop-shadow(0 0 4px rgba(34,93,56,0.3))" stroke="#225D38" strokeWidth="2" />
                <circle cx={packagePos.x} cy={packagePos.y} r="3" fill="#459A26" />
              </svg>

              {/* Map Labels */}
              <div className="absolute top-[145px] left-[5%] flex items-center gap-1 text-[10px] font-bold text-[#225D38]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Huili Base, CN</span>
              </div>
              <div className="absolute top-[125px] right-[5%] flex items-center gap-1 text-[10px] font-bold text-[#225D38]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Port of LA, US</span>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Readings */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Temperature stability panel */}
            <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-2xl p-6 glass-panel text-left">
              <h3 className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-4 flex items-center gap-2">
                <ThermometerSnowflake className="w-4.5 h-4.5" />
                Active Temp-Logger Program
              </h3>

              {/* Readouts */}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-[10px] text-[#333C37]/50 uppercase">Container Core Temp</span>
                  <div className="text-2xl font-bold text-[#333C37] mt-0.5">-0.5 °C</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-red-600 uppercase font-semibold">Outside Ambient</span>
                  <div className="text-sm font-semibold text-red-600 mt-0.5">+28.4 °C</div>
                </div>
              </div>

              {/* Mini plot diagram */}
              <div className="w-full h-12 bg-[#F7F9F5] rounded-lg border border-[#225D38]/10 overflow-hidden relative flex items-center">
                <div className="absolute left-0 right-0 h-[2px] bg-[#225D38] opacity-90 shadow-[0_0_5px_rgba(34,93,56,0.2)] top-[60%]" />
                <svg viewBox="0 0 300 48" className="absolute inset-0 w-full h-full text-red-500/20" preserveAspectRatio="none">
                  <path d="M 0,10 Q 50,38 100,12 T 200,40 T 300,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="absolute top-1 left-2 text-[9px] font-bold text-[#225D38] uppercase">
                  USB Temp-Logger: STABLE (-0.5°C ±0.2°C)
                </div>
              </div>
            </div>

            {/* Controlled Atmosphere details */}
            <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-2xl p-6 glass-panel text-left">
              <h3 className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-4 flex items-center gap-2">
                <Wind className="w-4.5 h-4.5" />
                Controlled Atmosphere Gas Mix
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-light text-[#333C37]">
                <div className="bg-white/80 p-3 rounded-xl border border-[#225D38]/10 shadow-sm">
                  <div className="font-bold text-[#225D38] text-sm">3.5%</div>
                  <div className="text-[9px] text-[#333C37]/50 uppercase mt-1">Oxygen (O₂)</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-[#225D38]/10 shadow-sm">
                  <div className="font-bold text-[#225D38] text-sm">5.0%</div>
                  <div className="text-[9px] text-[#333C37]/50 uppercase mt-1">Carbon Dioxide (CO₂)</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-[#225D38]/10 shadow-sm">
                  <div className="font-bold text-[#225D38] text-sm">91.5%</div>
                  <div className="text-[9px] text-[#333C37]/50 uppercase mt-1">Nitrogen (N₂)</div>
                </div>
              </div>
              <p className="text-[10px] text-[#333C37]/60 mt-3 font-light leading-relaxed">
                *CA reefers actively regulate humidity and gas balances, extending fruit freshness by up to 45 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
