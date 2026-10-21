import React from 'react';
import { Leaf, Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function Footer({ onNavigate, onOpenQuoteModal }) {
  return (
    <footer className="bg-[#141f17] text-white border-t border-[#233528]">
      {/* Top Banner with Lexington SC CTA */}
      <div className="bg-[#1b2b20] py-8 border-b border-[#263c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready for unmatched lawn care and a cleaner home?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Serving Lexington, Lake Murray, Irmo, Chapin & West Columbia, SC.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyConfig.rawPhone}`}
              className="px-5 py-2.5 rounded-xl bg-[#23382a] hover:bg-[#2d4735] text-slate-200 border border-[#375841] text-sm font-semibold flex items-center transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-[#8ce03f]" />
              {companyConfig.phone}
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-2.5 rounded-xl bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Get Free Instant Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-[#8ce03f] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#141f17] fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Ground<span className="text-[#8ce03f]">Help</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed pr-6">
              Lexington, South Carolina's premier property care service. Providing recurring lawn maintenance, seasonal landscape care, exterior soft washing, and dedicated residential house cleaning with <strong>GroundHelpClean</strong>.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                <span>{companyConfig.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                <span>{companyConfig.hours}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#8ce03f] flex-shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-[#8ce03f] transition-colors">
                  {companyConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Outdoor Services */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#8ce03f] mb-4">
              Lawn & Landscape
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('lawn')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Routine Mowing & Edging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lawn')} className="hover:text-[#8ce03f] transition-colors text-left">
                  String Trimming & Blowing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lawn')} className="hover:text-[#8ce03f] transition-colors text-left">
                  SC Pine Straw & Mulch
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lawn')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Core Aeration & Overseeding
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lawn')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Warm-Season Turf Care
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Exterior & Indoor Division */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#8ce03f] mb-4">
              Exterior & Cleaning
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('exterior')} className="hover:text-[#8ce03f] transition-colors text-left">
                  House Soft Washing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exterior')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Driveway & Patio Pressure Wash
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exterior')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Gutter Cleaning & Flushing
                </button>
              </li>
              <li className="pt-2 border-t border-[#233528]">
                <button onClick={() => onNavigate('cleaning')} className="text-[#8ce03f] font-semibold hover:underline text-left flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  GroundHelpClean (Indoor)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cleaning')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Recurring Maid Service
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial & Service Areas */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#8ce03f] mb-4">
              Commercial & Areas
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('commercial')} className="hover:text-[#8ce03f] transition-colors text-left">
                  HOA Common Ground Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commercial')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Neighborhood Group Discounts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commercial')} className="hover:text-[#8ce03f] transition-colors text-left">
                  Commercial Business Grounds
                </button>
              </li>
              <li className="pt-3">
                <span className="text-xs font-semibold text-slate-400 block mb-1">Coverage Areas:</span>
                <span className="text-xs text-slate-300 leading-normal block">
                  Lexington, Lake Murray, Irmo, Chapin, West Columbia, Red Bank & Gilbert.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-12 pt-8 border-t border-[#233528] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Ground Help LLC. All rights reserved. Locally owned in Lexington, SC.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8ce03f] mr-1" />
              General Liability & Workmans Comp Insured
            </span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:underline">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
