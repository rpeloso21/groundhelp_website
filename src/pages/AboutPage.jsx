import React from 'react';
import { ShieldCheck, Leaf, Sparkles, Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function AboutPage({ onOpenQuoteModal, onNavigate }) {
  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
            Locally Owned in Lexington, SC
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            About Ground Help
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Founded with a straightforward mission: provide Lexington and Lake Murray homeowners with unmatched lawn care and trustworthy, dedicated home cleaning.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Lexington Story
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                South Carolina's Midlands climate creates unique demands for homeowners. Between intense summer humidity, resilient warm-season turf types (Bermuda, Centipede, Zoysia), and stubborn exterior green algae, keeping a home looking its best takes constant work.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ground Help was built to solve this entire challenge under one reputable, local roof. We maintain professional outdoor landscaping crews who pride themselves on crisp 90-degree sidewalk edges and striped lawns, while operating an independent indoor division — <strong>GroundHelpClean</strong> — with background-checked specialists dedicated to spotless interiors.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                  <span>Licensed & Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#f4f8f4] p-6 rounded-2xl border border-[#d2eccd] text-center">
                <div className="w-12 h-12 rounded-xl bg-[#8ce03f] text-[#141f17] flex items-center justify-center mx-auto mb-3 font-bold">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Outdoor Division</h4>
                <p className="text-xs text-slate-600">Precision mowing, sharp edging, seasonal pine straw & soft washing.</p>
              </div>

              <div className="bg-[#f4f8f4] p-6 rounded-2xl border border-[#d2eccd] text-center">
                <div className="w-12 h-12 rounded-xl bg-[#141f17] text-[#8ce03f] flex items-center justify-center mx-auto mb-3 font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">GroundHelpClean</h4>
                <p className="text-xs text-slate-600">Dedicated indoor residential cleaning team for spotless living spaces.</p>
              </div>

              <div className="bg-[#f4f8f4] p-6 rounded-2xl border border-[#d2eccd] text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Community First</h4>
                <p className="text-xs text-slate-600">HOA common grounds & neighborhood route group discounts.</p>
              </div>

              <div className="bg-[#f4f8f4] p-6 rounded-2xl border border-[#d2eccd] text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Local & Reliable</h4>
                <p className="text-xs text-slate-600">Based in Lexington, SC with dependable scheduled routes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#141f17] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h3 className="text-3xl font-extrabold mb-3">Experience the Ground Help Difference</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get your instant quote today or speak directly with our Lexington customer support team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-7 py-3 rounded-xl text-sm transition-all"
            >
              Get Free Instant Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
