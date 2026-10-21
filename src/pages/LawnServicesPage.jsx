import React from 'react';
import { Leaf, CheckCircle2, ShieldCheck, Calendar, ArrowRight, Sun, Droplets, Sparkles } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import ServiceCard from '../components/ServiceCard';

export default function LawnServicesPage({ onOpenQuoteModal, onNavigate }) {
  const { lawnMaintenance, landscapeCare } = companyConfig.services;

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
            Lexington, SC Grounds Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Lawn Maintenance & Seasonal Landscape Care
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From precision weekly mowing and crisp vertical edging to South Carolina long-leaf pine straw installations and core aeration.
          </p>
        </div>

        {/* Priority 1: Lawn Maintenance Deep Dive */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-[#28581c] text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-4 h-4 text-[#8ce03f]" />
                <span>Priority Service • Weekly & Bi-Weekly</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {lawnMaintenance.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {lawnMaintenance.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  What's Included Every Scheduled Visit:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {lawnMaintenance.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('lawn-maintenance')}
                  className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow"
                >
                  Get Recurring Mowing Quote
                </button>
                <div className="text-xs text-slate-500 font-semibold">
                  Starting at <span className="text-[#28581c] font-bold text-sm">$45 / visit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f4f8f4] p-6 rounded-2xl border border-[#d2eccd] space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center">
                <Sun className="w-5 h-5 text-amber-500 mr-2" />
                Lexington SC Warm-Season Grass Guide
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                South Carolina's climate demands different cutting heights and care routines depending on your specific turf type:
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800">Bermuda Turf:</span>
                  <span className="text-slate-600 block">Cut at 1.0" - 2.0". Thrives on regular weekly mowing and sharp blades.</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800">Centipede Turf:</span>
                  <span className="text-slate-600 block">Cut at 1.5" - 2.5". Sensitive to over-fertilization; thrives with consistent weed prevention.</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800">Zoysia Turf:</span>
                  <span className="text-slate-600 block">Cut at 1.5" - 2.5". Dense and carpet-like; requires sharp rotary cuts to prevent tearing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority 2: Landscape & Seasonal Care */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3 py-1 rounded-full">
              Flower Beds & Turf Nutrition
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Landscape & Seasonal Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Maintain weed-free garden beds, crisp pine straw rolls, properly pruned shrubs, and aerated soil to withstand hot South Carolina summers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-3">🌲</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">SC Pine Straw & Mulch</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fresh long-needle South Carolina pine straw or dark double-shredded hardwood mulch, neatly tucked along turf edges to retain moisture and suppress weeds.
              </p>
              <button
                onClick={() => onOpenQuoteModal('landscape-seasonal')}
                className="text-xs font-bold text-[#28581c] hover:underline"
              >
                Request Bed Refresh →
              </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-3">✂️</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Hedge & Shrub Trimming</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Seasonal pruning of boxwoods, hollies, and ornamental shrubs to preserve plant health, promote dense foliage, and maintain neat curb appeal.
              </p>
              <button
                onClick={() => onOpenQuoteModal('landscape-seasonal')}
                className="text-xs font-bold text-[#28581c] hover:underline"
              >
                Request Shrub Pruning →
              </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Core Aeration</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Midlands red clay compacts over time, choking roots. Our core plug aerator pulls 2-3 inch plugs, breaking clay barrier and encouraging deep rooting.
              </p>
              <button
                onClick={() => onOpenQuoteModal('landscape-seasonal')}
                className="text-xs font-bold text-[#28581c] hover:underline"
              >
                Request Aeration →
              </button>
            </div>
          </div>
        </div>

        {/* Bundle Banner to Cross-promote GroundHelpClean */}
        <div className="bg-gradient-to-r from-[#141f17] to-[#1e3424] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#8ce03f] uppercase tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Complete Home Care Advantage
            </span>
            <h3 className="text-2xl font-bold">Did you know we also offer interior home cleaning?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Save 10% on your lawn care when you bundle recurring maid service through our dedicated indoor cleaning division, <strong>GroundHelpClean</strong>.
            </p>
          </div>
          <button
            onClick={() => onNavigate('cleaning')}
            className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors"
          >
            Learn About GroundHelpClean →
          </button>
        </div>
      </div>
    </div>
  );
}
