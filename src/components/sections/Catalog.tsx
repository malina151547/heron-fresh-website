"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  scientificName: string;
  season: string;
  brix: string;
  size: string;
  packaging: string;
  description: string;
  image: string;
  features: string[];
}

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(0);

  const products: Product[] = [
    {
      name: "Huili Soft-Seed Pomegranate",
      scientificName: "Punica granatum L. var. huili",
      season: "August - November",
      brix: "16.5° - 18.2°",
      size: "80mm - 100mm (Weight: 350g - 600g per fruit)",
      packaging: "4.5kg export carton (nested paper trays, 8/10/12 counts)",
      image: "/images/pomegranate_exterior.jpg",
      description:
        "The absolute gold standard of Chinese pomegranates. Featuring thick, ruby-red seed arils with soft, fully edible seeds, offering a sweet and crisp bite with zero seed residue.",
      features: ["Premium soft-seed variant", "Hand-harvested", "Phytosanitary cleared"],
    },
    {
      name: "Shine Muscat Grapes",
      scientificName: "Vitis vinifera L. 'Shine Muscat'",
      season: "July - October",
      brix: "18.0° - 20.0°",
      size: "Berry weight: 12g - 16g (Bunch weight: 500g - 750g)",
      packaging: "5.0kg foam box (10 bunches in protective fresh-bags)",
      image: "/images/shine_muscat.jpg",
      description:
        "Premium crisp green seedless grapes with a rich muscat aroma and subtle mango-like notes. Firm skin, juicy flesh, and outstanding transit endurance.",
      features: ["Seedless & crisp texture", "Double-sleeved packing", "Continuous atmosphere load"],
    },
    {
      name: "Honey Citrus",
      scientificName: "Citrus reticulata 'Ehime No. 38'",
      season: "November - January",
      brix: "14.5° - 16.0°",
      size: "65mm - 80mm (Weight: 200g - 350g)",
      packaging: "6.0kg double-deck carton (individual protective nets)",
      image: "/images/honey_citrus.jpg",
      description:
        "An ultra-premium citrus hybrid. Possesses a paper-thin skin enclosing melting jelly-like pulp. Highly aromatic with a perfectly balanced sugar-to-acid ratio.",
      features: ["Jelly-like pulp texture", "Easy peel skin", "Cold transit optimized"],
    },
  ];

  return (
    <section id="catalog" className="relative py-24 w-full select-text overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#225D38]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <div className="mb-16 max-w-xl text-left">
          <span className="text-xs font-bold text-[#225D38] tracking-widest uppercase mb-2 block">
            03 / Product Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#333C37] leading-tight">
            Curated Premium <br />
            <span className="bg-gradient-to-r from-[#225D38] to-[#459A26] bg-clip-text text-transparent">
              Asian Fruit Varieties
            </span>
          </h2>
        </div>

        {/* Catalog Tab System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Product Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {products.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#225D38] border-[#225D38] text-[#F7F9F5] shadow-lg shadow-[#225D38]/15 translate-x-2"
                    : "bg-[#225D38]/5 border-[#225D38]/10 hover:border-[#459A26]/30 text-[#333C37]"
                }`}
              >
                <h3 className={`text-lg font-serif font-bold mb-1 transition-colors ${
                  activeTab === idx ? "text-[#F7F9F5]" : "text-[#333C37]"
                }`}>
                  {p.name}
                </h3>
                <span className={`text-[10px] font-semibold tracking-wider uppercase ${
                  activeTab === idx ? "text-[#459A26]" : "text-[#225D38]"
                }`}>
                  {p.season}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Product Spec Board + Real Image */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-white border border-[#225D38]/10 rounded-3xl p-6 glass-panel shadow-xl shadow-slate-100 items-center">
            {/* Product image side */}
            <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[#225D38]/10 shadow-sm bg-slate-50">
              <Image
                src={products[activeTab].image}
                alt={products[activeTab].name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>

            {/* Product details side */}
            <div className="md:col-span-7 flex flex-col text-left">
              <span className="text-[10px] text-[#225D38] tracking-widest font-semibold uppercase mb-1 block">
                {products[activeTab].scientificName}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#333C37] mb-3">
                {products[activeTab].name}
              </h3>
              <p className="text-xs text-[#333C37]/85 leading-relaxed font-light mb-6">
                {products[activeTab].description}
              </p>

              {/* Spec Tables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#225D38]/10 pt-6 mb-6">
                <div>
                  <span className="text-[9px] text-[#333C37]/45 uppercase tracking-wider block">
                    Export Fruit Caliber
                  </span>
                  <span className="text-xs text-[#333C37] font-semibold mt-1 block">
                    {products[activeTab].size}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-[#333C37]/45 uppercase tracking-wider block">
                    Sweetness Index (Brix)
                  </span>
                  <span className="text-xs text-[#225D38] font-bold mt-1 block">
                    {products[activeTab].brix}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[9px] text-[#333C37]/45 uppercase tracking-wider block">
                    Export Packaging Specs
                  </span>
                  <span className="text-xs text-[#333C37] font-semibold mt-1 block">
                    {products[activeTab].packaging}
                  </span>
                </div>
              </div>

              {/* Core Selling Points */}
              <div className="flex flex-wrap gap-2">
                {products[activeTab].features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full bg-[#225D38]/5 border border-[#225D38]/15 text-[10px] font-semibold text-[#225D38]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
