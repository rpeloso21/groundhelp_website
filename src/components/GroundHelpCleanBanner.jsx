import React, { useState } from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Home, ArrowRight, Star } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function GroundHelpCleanBanner({ onNavigateToClean, onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('routine');

  return (
    <section className="my-16 bg-gradient-to-br from-[#112417] via-[#142d1d] to-[#163623] rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#2b4c34]">
      {/* Decorative background glow accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#8ce03f]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Division Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 animate-pulse text-amber-300" />
          <span>🚀 Coming Soon • Independent Residential Interior Division</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story & Distinction */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Coming Soon: <span className="text-[#8ce03f]">GroundHelpClean</span>.
              <span className="block text-2xl sm:text-3xl font-semibold text-slate-200 mt-1">
                Your Yard & Home Handled Under One Roof.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We know homeowners love having their lawn pristine, but keeping the inside spotless takes just as much time. That’s why we’re launching <strong className="text-white">GroundHelpClean</strong>: an upcoming residential cleaning service with a <strong className="text-[#8ce03f]">strictly separate, vetted indoor crew</strong>. Our team is currently preparing and training to bring you five-star interior home care.
            </p>

            {/* Crucial Crew Separation Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#1b3a26]/70 border border-[#2f5e3d] rounded-xl p-3.5 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Dedicated Indoor Team</span>
                  <span className="text-slate-300">Never the lawn crew. Meticulous indoor specialists in clean uniforms.</span>
                </div>
              </div>

              <div className="bg-[#1b3a26]/70 border border-[#2f5e3d] rounded-xl p-3.5 flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Bundle & Save 10%</span>
                  <span className="text-slate-300">Save 10% on recurring lawn care when paired with home cleaning.</span>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onNavigateToClean}
                className="bg-[#8ce03f] hover:bg-[#7ecc34] active:bg-[#6eb828] text-[#141f17] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center space-x-2"
              >
                <span>Learn About GroundHelpClean</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuoteModal('ground-help-clean')}
                className="bg-[#1f3d2a] hover:bg-[#284f37] border border-[#386b4a] text-amber-300 font-semibold px-5 py-3 rounded-xl text-sm transition-all flex items-center space-x-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join Launch Waitlist</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Checklist Box */}
          <div className="lg:col-span-5 bg-[#0f2115] border border-[#25462f] rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#213f2a] mb-4">
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5 text-[#8ce03f]" />
                <span className="font-bold text-sm text-white">What's Included</span>
              </div>
              <div className="flex space-x-1 bg-[#172c1e] p-0.5 rounded-lg text-xs">
                <button
                  onClick={() => setActiveTab('routine')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'routine' ? 'bg-[#8ce03f] text-[#141f17] font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Routine Maid
                </button>
                <button
                  onClick={() => setActiveTab('deep')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'deep' ? 'bg-[#8ce03f] text-[#141f17] font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Deep Clean
                </button>
              </div>
            </div>

            {activeTab === 'routine' ? (
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Kitchen sanitization (countertops, stovetop, exterior appliances, sink)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Bathrooms scrubbed & disinfected (shower, tub, mirrors, toilets)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Hardwood & tile vacuumed and damp-mopped</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Carpet vacuuming with commercial HEPA filtration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Trash emptied & beds made (linens changed upon request)</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Everything in Routine Maid service plus detailed grime removal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Interior oven and refrigerator detailing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Baseboards, window sills, door frames & light switches hand-wiped</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Cabinet fronts hand-cleaned & ceiling fans dusted</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                  <span>Ideal for seasonal refreshing or move-in / move-out readiness</span>
                </li>
              </ul>
            )}

            <div className="mt-5 pt-3 border-t border-[#213f2a] flex items-center justify-between text-xs">
              <span className="text-slate-400">Launch Status:</span>
              <span className="text-amber-300 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">Coming Soon — Waitlist Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
