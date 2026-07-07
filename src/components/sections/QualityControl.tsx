"use client";

import Image from "next/image";
import { ShieldCheck, Eye, Sparkles } from "lucide-react";

export default function QualityControl() {
  return (
    <section id="quality" className="relative py-24 w-full bg-[#F7F9F5] select-text overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[10%] right-1/4 w-[400px] h-[400px] rounded-full bg-[#225D38]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16">
        {/* Title */}
        <div className="max-w-2xl text-left">
          <span className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-2 block">
            02 / Post-Harvest & Quality Standards
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#333C37] leading-tight">
            Rigorous Post-Harvest Sorting, <br />
            <span className="bg-gradient-to-r from-[#225D38] to-[#459A26] bg-clip-text text-transparent">
              Zero Destination Rejection
            </span>
          </h2>
          <p className="text-sm text-[#333C37]/80 font-light leading-relaxed mt-4 max-w-xl">
            Arrival quality is our ultimate metric. We enforce multi-stage sorting at local packing facilities, combining automated caliber selection with non-destructive sweetness testing to ensure box-to-box consistency.
          </p>
        </div>

        {/* side-by-side inspection cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technology Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#225D38]/5 flex items-center justify-center flex-shrink-0 border border-[#225D38]/10">
                <ShieldCheck className="w-5 h-5 text-[#225D38]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#333C37] mb-1">
                  Optical Caliber Sizing
                </h3>
                <p className="text-xs text-[#333C37]/70 leading-relaxed font-light">
                  Every fruit is weighed and optically sorted. We categorize our yield by weight and diameter to match strict supermarket count schedules (8/10/12 counts per box).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#225D38]/5 flex items-center justify-center flex-shrink-0 border border-[#225D38]/10">
                <Eye className="w-5 h-5 text-[#225D38]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#333C37] mb-1">
                  Brix & Core Quality Checks
                </h3>
                <p className="text-xs text-[#333C37]/70 leading-relaxed font-light">
                  We verify internal parameters before packing. Near-Infrared (NIR) sampling ensures sugar indices and acidity ratios align with export parameters (target 17°+ Brix).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#225D38]/5 flex items-center justify-center flex-shrink-0 border border-[#225D38]/10">
                <Sparkles className="w-5 h-5 text-[#225D38]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#333C37] mb-1">
                  Phytosanitary Clearance
                </h3>
                <p className="text-xs text-[#333C37]/70 leading-relaxed font-light">
                  Complying with FDA, EFSA, and local customs regulations, our packing plants undergo regular residue testing to secure plant health certificates for seamless port entry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Side-by-Side Photo Comparison */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
            {/* Card 1: Exterior Calibration */}
            <div className="bg-white border border-[#225D38]/10 rounded-3xl p-4 shadow-md flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pomegranate_exterior.jpg"
                  alt="Heron Fresh Pomegranate Skin Caliber Sort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="text-left px-2 pb-2">
                <span className="text-[9px] font-bold text-[#459A26] tracking-wider uppercase">
                  Phase 01
                </span>
                <h4 className="text-sm font-serif font-bold text-[#333C37] mt-0.5">
                  Visual Calibration & Caliber Sorting
                </h4>
                <p className="text-[11px] text-[#333C37]/60 font-light mt-1 leading-relaxed">
                  Optical weight sensors sort sizes while manual checkers double-inspect skin integrity, filtering out fruits with structural blemishes.
                </p>
              </div>
            </div>

            {/* Card 2: NIR Interior Scan */}
            <div className="bg-white border border-[#225D38]/10 rounded-3xl p-4 shadow-md flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pomegranate_interior.jpg"
                  alt="Heron Fresh Pomegranate Sweetness Check"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                {/* Tech scan overlay */}
                <div className="absolute inset-0 bg-[#225D38]/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-1/2 h-[2px] bg-[#459A26] shadow-[0_0_10px_#459A26] animate-bounce" />
              </div>
              <div className="text-left px-2 pb-2">
                <span className="text-[9px] font-bold text-[#459A26] tracking-wider uppercase">
                  Phase 02
                </span>
                <h4 className="text-sm font-serif font-bold text-[#333C37] mt-0.5">
                  Brix Index & Core Inspection
                </h4>
                <p className="text-[11px] text-[#333C37]/60 font-light mt-1 leading-relaxed">
                  Quarantine representatives verify sugar levels and internal health index, ensuring only healthy fruit clusters are placed into cartons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
