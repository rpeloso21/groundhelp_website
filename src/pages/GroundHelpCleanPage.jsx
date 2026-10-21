import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Home, 
  Star, 
  Clock, 
  Calendar, 
  Layers, 
  Check, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function GroundHelpCleanPage({ onOpenQuoteModal, onNavigate }) {
  const [selectedRoom, setSelectedRoom] = useState('kitchen');

  const roomChecklists = {
    kitchen: {
      title: "Kitchen Detailing",
      icon: "🍳",
      items: [
        "Exterior of all appliances cleaned & polished (stove, fridge, dishwasher, microwave)",
        "Countertops disinfected and backsplashes degreased",
        "Sinks and chrome fixtures scrubbed, sanitized, and shined",
        "Exterior cabinet surfaces wiped down",
        "Floors vacuumed and damp-mopped with non-streak floor care",
        "Trash emptied and fresh liners installed"
      ]
    },
    bathrooms: {
      title: "Bathroom Sanitization",
      icon: "🚿",
      items: [
        "Showers, tile walls, and glass doors scrubbed to remove soap scum & water stains",
        "Bathtubs deep-cleaned, sanitized, and rinsed",
        "Toilets disinfected thoroughly inside and around base",
        "Vanity countertops, sinks, and mirrors polished streak-free",
        "Bath mats shaken and tile floors disinfected & hand-mopped",
        "Chrome fixtures polished to a brilliant shine"
      ]
    },
    living: {
      title: "Living & Dining Rooms",
      icon: "🛋️",
      items: [
        "All surfaces, coffee tables, and shelves dusted",
        "Upholstered furniture vacuumed & cushions tidied",
        "Hardwood and laminate vacuumed and conditioned",
        "Baseboards and high-touch areas wiped down",
        "Ceiling fans and accessible light fixtures dusted",
        "Window sills and picture frames dusted"
      ]
    },
    bedrooms: {
      title: "Bedrooms & Sleeping Quarters",
      icon: "🛏️",
      items: [
        "Beds neatly made (linens changed if fresh sheets provided)",
        "Nightstands, dressers, and decor dusted with care",
        "Mirrors and glass tabletops polished",
        "Carpets vacuumed with hospital-grade HEPA filtration",
        "Closet exterior doors and handles sanitized",
        "Trash emptied from wastebaskets"
      ]
    }
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner with Distinct Indoor Aesthetic */}
        <div className="bg-gradient-to-br from-[#122417] via-[#16301f] to-[#1c3f29] rounded-3xl text-white p-8 sm:p-14 shadow-2xl border border-[#2b4d34] mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#8ce03f]/20 border border-[#8ce03f]/40 text-[#8ce03f] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#8ce03f]" />
              <span>Independent Residential Division • GroundHelpClean</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Pristine Outdoors. <br />
              <span className="text-[#8ce03f]">Spotless Indoors.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              GroundHelpClean is our dedicated residential cleaning division. Designed as an additional, premium service for Lexington and Lake Murray homeowners who want total home care from one reliable local brand.
            </p>

            {/* Crew Separation Guarantee Pill */}
            <div className="bg-[#1f3d28]/80 border border-[#3b6b47] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#8ce03f] text-[#141f17] flex items-center justify-center font-bold flex-shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Our Dedicated Indoor Crew Pledge</h4>
                  <p className="text-xs text-slate-300">
                    Never the lawn crew. Meticulous, background-checked indoor cleaning specialists equipped with HEPA filtration vacuums and pet-safe products.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuoteModal('ground-help-clean')}
                className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center space-x-2"
              >
                <span>Book GroundHelpClean</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('bundle-savings');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#203c29] hover:bg-[#2b5237] text-white border border-[#386b49] font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                See Bundle & Save Options
              </button>
            </div>
          </div>
        </div>

        {/* 3 Cleaning Service Tiers */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
              Flexible Scheduling
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Residential Cleaning Options
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Choose the recurring schedule or one-time deep clean that fits your family's routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recurring Maid */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#f2fce2] px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                  Recurring Maid Service
                </h3>
                <p className="text-xs text-slate-500 mb-4">Weekly, Bi-Weekly, or Monthly</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Keep your home continuously fresh with a consistent cleaning specialist who learns your personal preferences and home habits.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Complete kitchen & bathroom scrub</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Dusting all living areas & bedrooms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Hardwood mopping & HEPA carpet vacuuming</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">
                  Starting at <span className="text-lg font-bold text-[#28581c]">$135 / clean</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('ground-help-clean')}
                  className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Schedule Recurring Clean
                </button>
              </div>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#bbf7d0] shadow-soft flex flex-col justify-between relative">
              <span className="absolute -top-3 left-8 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#8ce03f] text-[#141f17]">
                Seasonal Refresh
              </span>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2">
                  Deep Clean Detailing
                </h3>
                <p className="text-xs text-slate-500 mb-4">Top-to-Bottom Reset</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Intensive scrubbing tackling grime that builds up over time: hand-wiping baseboards, detailing oven & fridge, and dusting high ledges.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Hand-wiped baseboards & door frames</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Interior oven & refrigerator scrub</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Tile grout cleaning & ceiling fan blading</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">
                  Starting at <span className="text-lg font-bold text-[#28581c]">$240 / clean</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('ground-help-clean')}
                  className="w-full bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold py-2.5 rounded-xl text-xs transition-colors shadow"
                >
                  Book Deep Clean
                </button>
              </div>
            </div>

            {/* Move-In / Move-Out */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  Real Estate Ready
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                  Move-In / Move-Out
                </h3>
                <p className="text-xs text-slate-500 mb-4">For Homeowners, Buyers & Tenants</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Ensure the property is turn-key ready for new occupants or your closing walkthrough. We empty and detail cabinets, closets, and appliances.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Interior cabinets & pantry wiped out</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>All closets, shelving & drawers vacuumed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#8ce03f]" />
                    <span>Closing walkthrough ready guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">
                  Starting at <span className="text-lg font-bold text-[#28581c]">$280 / clean</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('ground-help-clean')}
                  className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Book Move-In/Out Clean
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Room Checklist Explorer */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
              Transparent Standards
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Our 50-Point Room Cleaning Checklist
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Click a room to see our exact cleaning process. We never cut corners.
            </p>
          </div>

          {/* Room Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(roomChecklists).map((key) => {
              const room = roomChecklists[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedRoom(key)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
                    selectedRoom === key
                      ? 'bg-[#141f17] text-[#8ce03f] shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{room.icon}</span>
                  <span>{room.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Checklist Items */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <span className="mr-2 text-xl">{roomChecklists[selectedRoom].icon}</span>
              Included in {roomChecklists[selectedRoom].title}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {roomChecklists[selectedRoom].items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bundle & Save Banner */}
        <div id="bundle-savings" className="bg-[#f2fce2] border-2 border-[#bbf7d0] rounded-3xl p-8 sm:p-12 text-[#141f17] mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#8ce03f] text-[#141f17] text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>The Ground Help Bundle Advantage</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">
                Save 10% on Lawn Care When You Bundle Cleaning!
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Why juggle two different contractors, two phone calls, and two different invoices? When you use Ground Help for your weekly or bi-weekly lawn care and GroundHelpClean for your home maid service, we discount your recurring lawn care by 10%.
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('ground-help-clean')}
              className="bg-[#141f17] hover:bg-[#1f3124] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md whitespace-nowrap"
            >
              Get Bundled Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
