import React, { useState } from 'react';
import { Building2, Users, ShieldCheck, CheckCircle2, ArrowRight, FileText, Phone, Mail, Sparkles } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function CommercialHoaPage({ onOpenQuoteModal }) {
  const [rfpSubmitted, setRfpSubmitted] = useState(false);
  const [rfpForm, setRfpForm] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    propertyType: 'hoa-subdivision', // hoa-subdivision, commercial-retail, business-park, neighborhood-group
    address: '',
    approxAcreage: '1-5',
    notes: ''
  });

  const handleRfpSubmit = (e) => {
    e.preventDefault();
    setRfpSubmitted(true);
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
            Midlands Commercial Grounds Division
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Commercial & HOA Grounds Maintenance
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Reliable scheduled grounds care for Lexington HOA boards, property management firms, commercial retail centers, and neighborhood group opportunities.
          </p>
        </div>

        {/* 2 Main Commercial Portals: HOA & Commercial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* HOA Communities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#f2fce2] text-[#28581c] flex items-center justify-center font-bold text-2xl">
              🏘️
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              HOA Common Grounds Management
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We partner directly with HOA board presidents and community property managers to keep neighborhood entrances welcoming, manicured, and code-compliant year-round.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <span>Subdivision entrance monument bed design & seasonal color rotations</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <span>Common area turf mowing, edging, and debris blowing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <span>Stormwater retention pond bank trimming & vegetation management</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                <span>Clubhouse, playground, and pool perimeter maintenance</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('rfp-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#141f17] hover:bg-[#1f3124] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
              >
                Submit HOA Bid Request →
              </button>
            </div>
          </div>

          {/* Commercial Properties */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-2xl">
              🏢
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Commercial & Retail Grounds
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              First impressions dictate how clients perceive your business. We keep commercial lots, storefronts, and office parks impeccably manicured with zero business disruption.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Off-peak scheduling so mowers never disrupt customer parking or entry</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Parking island shrub trimming and litter control</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>Sidewalk pressure washing and storefront soft wash maintenance</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>$2M commercial general liability insurance and dedicated rep</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('rfp-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#141f17] hover:bg-[#1f3124] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
              >
                Request Commercial RFP →
              </button>
            </div>
          </div>
        </div>

        {/* Priority 5 Highlight: Neighborhood Group Service Opportunities */}
        <div className="bg-gradient-to-r from-[#141f17] via-[#1a2d21] to-[#141f17] rounded-3xl text-white p-8 sm:p-12 mb-16 shadow-xl border border-[#2b4d34]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8ce03f]/20 border border-[#8ce03f]/40 text-[#8ce03f] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#8ce03f]" />
                <span>Neighborhood Group Route Savings</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Neighborhood Group Service Opportunities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Do you and your neighbors want reliable weekly mowing or annual driveway pressure washing on the same day? When 3 or more homes on the same Lexington street or cul-de-sac sign up together, we pass the route density savings to all participants:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="bg-[#1f3827] p-3 rounded-xl border border-[#30593d]">
                  <strong className="text-[#8ce03f] block text-sm mb-0.5">10% – 15% Group Discount</strong>
                  Applied directly to each neighbor's regular recurring mowing rate.
                </div>
                <div className="bg-[#1f3827] p-3 rounded-xl border border-[#30593d]">
                  <strong className="text-[#8ce03f] block text-sm mb-0.5">Same-Day Neighborhood Quiet</strong>
                  Our crews take care of all properties efficiently in one visit.
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('rfp-form');
                if (el) {
                  setRfpForm({ ...rfpForm, propertyType: 'neighborhood-group' });
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg whitespace-nowrap"
            >
              Sign Up Your Street
            </button>
          </div>
        </div>

        {/* Commercial RFP / Bid Submission Form */}
        <div id="rfp-form" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft max-w-4xl mx-auto">
          {!rfpSubmitted ? (
            <>
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
                  Commercial Bids & Proposals
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Request an HOA or Commercial Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Provide your property specs and our commercial grounds manager will schedule an on-site walkthrough.
                </p>
              </div>

              <form onSubmit={handleRfpSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Organization / HOA Community Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Golden Hills HOA or Lake Murray Center"
                      required
                      value={rfpForm.organizationName}
                      onChange={(e) => setRfpForm({ ...rfpForm, organizationName: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Contact Name & Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Sarah Smith, Board President"
                      required
                      value={rfpForm.contactName}
                      onChange={(e) => setRfpForm({ ...rfpForm, contactName: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="contact@community.org"
                      required
                      value={rfpForm.email}
                      onChange={(e) => setRfpForm({ ...rfpForm, email: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(803) 000-0000"
                      required
                      value={rfpForm.phone}
                      onChange={(e) => setRfpForm({ ...rfpForm, phone: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Property Opportunity Type
                    </label>
                    <select
                      value={rfpForm.propertyType}
                      onChange={(e) => setRfpForm({ ...rfpForm, propertyType: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    >
                      <option value="hoa-subdivision">HOA Subdivision Common Grounds</option>
                      <option value="neighborhood-group">Neighborhood Group Service (3+ Neighbors)</option>
                      <option value="commercial-retail">Commercial Retail / Storefront</option>
                      <option value="business-park">Corporate Business Park</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Property Address / Location in Lexington
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Highway 378 / Sunset Blvd area"
                      required
                      value={rfpForm.address}
                      onChange={(e) => setRfpForm({ ...rfpForm, address: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Scope of Work / Scope Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Details about mowing acreage, pine straw needs, retention ponds, or number of participating homes..."
                    value={rfpForm.notes}
                    onChange={(e) => setRfpForm({ ...rfpForm, notes: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-[#8ce03f]" />
                  <span>Submit Commercial RFP</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#f2fce2] text-[#28581c] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#5ea828]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                RFP Received, {rfpForm.contactName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for considering Ground Help for {rfpForm.organizationName}. Our commercial grounds estimator will contact you within 24 hours to schedule an on-site property walkthrough.
              </p>
              <button
                onClick={() => setRfpSubmitted(false)}
                className="text-xs text-[#28581c] font-bold underline"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
