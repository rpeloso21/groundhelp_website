import React from 'react';
import { Droplets, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function ExteriorCleaningPage({ onOpenQuoteModal, onNavigate }) {
  const { exteriorCleaning } = companyConfig.services;

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-3.5 py-1 rounded-full">
            Exterior Cleaning Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            House Soft Washing & Pressure Washing
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Safely remove stubborn green algae, mold, spider webs, and red clay stains from siding, driveways, patios, and gutters throughout Lexington & Lake Murray.
          </p>
        </div>

        {/* 3 Main Exterior Cleaning Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: House Soft Wash */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-2xl mb-4">
                🏡
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                House Soft Washing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our low-pressure soft washing uses specialized cleaning detergents that kill organic algae and mildew spores on contact, without the dangerous PSI that damages vinyl or strips paint.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Vinyl siding, hardy plank, stucco & painted brick</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Low pressure (&lt; 300 PSI) protects window seals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Includes soffits, fascia & porch ceilings</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal('exterior-cleaning')}
              className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Get House Wash Estimate
            </button>
          </div>

          {/* Card 2: Driveway & Patio Pressure Washing */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-2xl mb-4">
                🚗
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Driveway & Patio Washing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Concrete surfaces trap dirt, tire marks, mildew, and South Carolina red clay. We use industrial rotary surface cleaners that clean flat concrete evenly without streaks or zebra lines.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Concrete driveways, sidewalks & entry walkways</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Patios, pavers & brick retaining walls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Post-wash algaecide treatment keeps concrete clean longer</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal('exterior-cleaning')}
              className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Get Concrete Wash Estimate
            </button>
          </div>

          {/* Card 3: Gutter Cleaning */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl mb-4">
                🍂
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Gutter Cleaning & Flushing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Pine needles from Midlands pines quickly choke gutters and cause overflow damage to foundations and fascia boards. We clear, bag, and flush your entire system.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Thorough hand-clearing and bagging of debris</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Downspout water flow testing to guarantee drainage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Optional exterior gutter brightening (tiger stripe removal)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal('exterior-cleaning')}
              className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Get Gutter Clean Estimate
            </button>
          </div>
        </div>

        {/* Plant Safety & Guarantee Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Landscape Protection Protocol</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                100% Plant & Shrub Safe Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We pre-soak all shrubs, flowers, and turf before starting, maintain continuous plant rinsing throughout the washing process, and apply a post-treatment rinse neutralizer. Your surrounding landscaping stays healthy and beautiful.
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('exterior-cleaning')}
              className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm whitespace-nowrap shadow"
            >
              Book Exterior Washing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
