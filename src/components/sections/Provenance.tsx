"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, ShieldCheck, HelpCircle, Activity, Globe, Compass, Landmark } from "lucide-react";

export default function Provenance() {
  const [lotStatus, setLotStatus] = useState("Clearing Quarantine");
  const [chartPoints, setChartPoints] = useState<string>("");

  // Cycle mock active export lots to show real-time supply coordination
  useEffect(() => {
    const statuses = ["Pre-cooling", "Sorting Caliber", "Phytosanitary Clearance", "CA Container Loading"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % statuses.length;
      setLotStatus(statuses[idx]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Generate an animated wave representing regional seasonal rainfall/solar radiation trends
  useEffect(() => {
    let frameId: number;
    let tick = 0;

    const generateWave = () => {
      tick += 0.04;
      const width = 500;
      const height = 100;
      const points = [];

      for (let x = 0; x <= width; x += 10) {
        const y =
          height / 2 +
          Math.sin(x * 0.03 + tick) * 12 +
          Math.cos(x * 0.06 - tick * 0.4) * 6;
        points.push(`${x},${y}`);
      }

      setChartPoints(`M ${points.join(" L ")}`);
      frameId = requestAnimationFrame(generateWave);
    };

    generateWave();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="provenance" className="relative py-24 w-full select-text overflow-hidden bg-white">
      {/* Visual background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#459A26]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16">
        {/* Title */}
        <div className="max-w-2xl text-left">
          <span className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-2 block">
            01 / Sourcing & Traceability
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#333C37] leading-tight">
            Direct Sourcing Partnerships, <br />
            <span className="bg-gradient-to-r from-[#225D38] to-[#459A26] bg-clip-text text-transparent">
              100% Orchard-to-Port Traceability
            </span>
          </h2>
          <p className="text-sm text-[#333C37]/80 font-light leading-relaxed mt-4 max-w-xl">
            We bypass middlemen. By entering direct, long-term contracts with regional cooperatives in pristine mountain valleys, we guarantee price stability, volume security, and absolute origin authenticity.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Sourcing details */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-2xl p-6 hover:border-[#459A26]/30 transition-all duration-500 glass-panel">
              <div className="w-10 h-10 rounded-lg bg-[#225D38]/10 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5 text-[#225D38]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#333C37] mb-2">
                Contract Farming Model
              </h3>
              <p className="text-sm text-[#333C37]/75 font-light leading-relaxed">
                By locking in harvest programs months in advance with rural cooperatives, we guarantee our retail partners stable supply allocations even during volatile seasons.
              </p>
            </div>

            <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-2xl p-6 hover:border-[#459A26]/30 transition-all duration-500 glass-panel">
              <div className="w-10 h-10 rounded-lg bg-[#225D38]/10 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5 text-[#225D38]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#333C37] mb-2">
                Valley Microclimates
              </h3>
              <p className="text-sm text-[#333C37]/75 font-light leading-relaxed">
                Sourced from steep valley terraces at over 1,500m elevation. Extreme day-night temperature swings trigger rapid sugar accumulation for unmatched natural flavor profiles.
              </p>
            </div>

            <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-2xl p-6 hover:border-[#459A26]/30 transition-all duration-500 glass-panel sm:col-span-2">
              <h3 className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#225D38]" />
                Signature Origin: Sichuan Huili
              </h3>
              <p className="text-sm text-[#333C37]/80 leading-relaxed font-light mb-4">
                Huili County is the world-renowned source of premium pomegranates with a 2,000-year history. Its unique dry-hot mountain climate yields dense arils with soft, edible seeds and a Brix level hovering consistently around 17°–18°.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-[#225D38]">
                <span>✓ Direct Orchard Contracts</span>
                <span>✓ Barcode Sourcing Traceability</span>
                <span>✓ Pesticide Residue Checked</span>
              </div>
            </div>
          </div>

          {/* Right Side: Sourcing Traceability & Supply Panel */}
          <div id="sourcing-desk" className="lg:col-span-6 bg-white border border-[#225D38]/10 rounded-3xl p-8 glass-panel relative overflow-hidden shadow-xl shadow-slate-100">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#459A26]/10 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 border-b border-[#225D38]/10 pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#333C37]">
                  Supply Chain Desk
                </h3>
                <p className="text-[10px] text-[#225D38] tracking-wider uppercase flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#459A26] animate-ping" />
                  Active Sourcing Lot Status
                </p>
              </div>
              <Globe className="w-5 h-5 text-[#225D38]" />
            </div>

            {/* Sourcing supply statistics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-xl p-4 flex flex-col items-center">
                <span className="text-[9px] text-[#333C37]/50 tracking-wider uppercase">
                  Co-op Orchards
                </span>
                <span className="text-lg font-bold text-[#333C37] mt-1">8,500+ Mu</span>
              </div>
              <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-xl p-4 flex flex-col items-center">
                <span className="text-[9px] text-[#333C37]/50 tracking-wider uppercase">
                  Annual Yield
                </span>
                <span className="text-lg font-bold text-[#333C37] mt-1">12K Tons</span>
              </div>
              <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-xl p-4 flex flex-col items-center">
                <span className="text-[9px] text-[#333C37]/50 tracking-wider uppercase">
                  Trace Target
                </span>
                <span className="text-lg font-bold text-[#225D38] mt-1">100%</span>
              </div>
            </div>

            {/* Sourcing Real-Time Logistics Update */}
            <div className="flex flex-col gap-4 mb-6 text-left">
              <div className="bg-[#225D38]/5 border border-[#225D38]/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#333C37]/50 uppercase">Current Monitored Export Lot</div>
                  <div className="text-sm font-semibold text-[#333C37] mt-0.5">HF-POM-2026-S09A</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#225D38] text-[9px] font-bold text-white uppercase tracking-wider">
                  {lotStatus}
                </span>
              </div>
            </div>

            {/* Geographical Solar & Rainfall trends */}
            <div className="bg-[#F7F9F5] border border-[#225D38]/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3 text-[9px] text-[#333C37]/50 tracking-wider uppercase">
                <span>Huili Valley Seasonal Solar Radiation Index</span>
                <span className="text-[#225D38] font-bold">2,650 hrs/yr</span>
              </div>
              <div className="w-full h-20 overflow-hidden relative flex items-center justify-center bg-white rounded-lg border border-[#225D38]/10">
                <svg viewBox="0 0 500 100" className="w-full h-full text-[#225D38] opacity-80" preserveAspectRatio="none">
                  <path
                    d={chartPoints}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="500" y2="25" stroke="#225D38" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.05" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#225D38" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.05" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="#225D38" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.05" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Wide Panoramic Landscape Asset */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-[#225D38]/10">
          <Image
            src="/images/hero_orchard.jpg"
            alt="Heron Fresh Pristine Sichuan Valley Orchards Sourcing Origin"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#333C37]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white text-left">
            <h4 className="text-lg font-serif font-bold">Pristine Valley Orchard Sourcing</h4>
            <p className="text-xs opacity-90 font-light mt-0.5">Huili Base, Sichuan Province — Latitude 26°N</p>
          </div>
        </div>
      </div>
    </section>
  );
}
