import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Home, Trees, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyConfig } from '../data/companyConfig';

export default function InstantQuoteCard({ initialService = 'lawn-maintenance', compact = false }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '29072',
    serviceType: initialService,
    propertySize: 'medium', // small, medium, large, estate
    frequency: 'weekly', // weekly, biweekly, onetime
    bundleCleaning: false,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimateResult, setEstimateResult] = useState(null);

  // Estimate calculation engine for Lexington SC area
  const calculateEstimate = () => {
    let baseMin = 45;
    let baseMax = 55;

    if (formData.serviceType === 'lawn-maintenance') {
      if (formData.propertySize === 'small') { baseMin = 40; baseMax = 48; }
      else if (formData.propertySize === 'medium') { baseMin = 48; baseMax = 60; }
      else if (formData.propertySize === 'large') { baseMin = 65; baseMax = 85; }
      else if (formData.propertySize === 'estate') { baseMin = 95; baseMax = 140; }

      if (formData.frequency === 'biweekly') {
        baseMin = Math.round(baseMin * 1.15);
        baseMax = Math.round(baseMax * 1.15);
      }
    } else if (formData.serviceType === 'landscape-seasonal') {
      baseMin = 140; baseMax = 280;
      if (formData.propertySize === 'large' || formData.propertySize === 'estate') {
        baseMin = 280; baseMax = 550;
      }
    } else if (formData.serviceType === 'exterior-cleaning') {
      baseMin = 185; baseMax = 320;
      if (formData.propertySize === 'large' || formData.propertySize === 'estate') {
        baseMin = 320; baseMax = 490;
      }
    } else if (formData.serviceType === 'ground-help-clean') {
      baseMin = 135; baseMax = 195;
      if (formData.propertySize === 'large' || formData.propertySize === 'estate') {
        baseMin = 210; baseMax = 320;
      }
    } else if (formData.serviceType === 'commercial-hoa') {
      baseMin = 350; baseMax = 950;
    }

    let bundleSavings = 0;
    let cleaningAddon = 0;
    if (formData.bundleCleaning && formData.serviceType !== 'ground-help-clean') {
      cleaningAddon = 145;
      bundleSavings = Math.round((baseMin + cleaningAddon) * 0.10);
    }

    return {
      min: baseMin,
      max: baseMax,
      cleaningAddon,
      bundleSavings,
      totalMin: baseMin + cleaningAddon - bundleSavings,
      totalMax: baseMax + cleaningAddon - bundleSavings
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const est = calculateEstimate();
    setEstimateResult(est);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#8ce03f', '#141f17', '#38bdf8', '#22c55e']
      });
    } catch (err) {
      // safe fallback if canvas is unavailable
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-float p-6 sm:p-7 border border-[#e2ece3] max-w-md w-full relative z-10 transition-all">
      {/* Top Header matching Mockup 1 */}
      {!submitted ? (
        <>
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center">
                Instant Quote
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fast pricing for Lexington & Lake Murray yards
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#8ce03f]/15 flex items-center justify-center text-[#2e5c1a]">
              <Calculator className="w-5 h-5" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Service Type Selection */}
            <div>
              <label htmlFor="quote-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Service Type
              </label>
              <select
                id="quote-service"
                name="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full text-sm font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] focus:border-transparent transition-all"
                required
              >
                <option value="lawn-maintenance">Lawn Maintenance (Mow, Edge, Trim, Blow)</option>
                <option value="landscape-seasonal">Landscape & Seasonal (Pine Straw / Mulch / Aeration)</option>
                <option value="exterior-cleaning">Exterior Cleaning (House Soft Wash / Pressure Wash)</option>
                <option value="ground-help-clean">GroundHelpClean (Dedicated Interior Maid Service)</option>
                <option value="commercial-hoa">Commercial Grounds & HOA Maintenance</option>
              </select>
            </div>

            {/* Quick Property Size and Frequency */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor="quote-size" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Property Size
                </label>
                <select
                  id="quote-size"
                  value={formData.propertySize}
                  onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f]"
                >
                  <option value="small">Small (&lt; 0.25 Acre)</option>
                  <option value="medium">Average (0.25 - 0.50 Acre)</option>
                  <option value="large">Large (0.50 - 1.0 Acre)</option>
                  <option value="estate">Estate (1+ Acre)</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-freq" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Frequency
                </label>
                <select
                  id="quote-freq"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f]"
                >
                  <option value="weekly">Weekly (Best Results)</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="onetime">One-Time Service</option>
                </select>
              </div>
            </div>

            {/* GroundHelpClean Add-on Bundle Checkbox */}
            {formData.serviceType !== 'ground-help-clean' && (
              <div className="p-2.5 rounded-xl bg-[#f2fce2] border border-[#d2f3a6] flex items-start space-x-2.5">
                <input
                  type="checkbox"
                  id="bundle-cleaning"
                  checked={formData.bundleCleaning}
                  onChange={(e) => setFormData({ ...formData, bundleCleaning: e.target.checked })}
                  className="mt-0.5 rounded text-[#2f5c1e] focus:ring-[#8ce03f] w-4 h-4 cursor-pointer accent-[#8ce03f]"
                />
                <label htmlFor="bundle-cleaning" className="text-xs text-[#1e3b12] cursor-pointer">
                  <span className="font-bold flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-[#468c22]" />
                    Bundle GroundHelpClean (Save 10%)
                  </span>
                  Add our dedicated interior home cleaning crew to your service plan.
                </label>
              </div>
            )}

            {/* Name Input */}
            <div>
              <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Name
              </label>
              <input
                id="quote-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
              />
            </div>

            {/* Phone & Zip Code */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Phone (Optional)
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(803) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
                />
              </div>

              <div>
                <label htmlFor="quote-zip" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Zip Code
                </label>
                <input
                  id="quote-zip"
                  name="zipCode"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="29072"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  required
                  className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
                />
              </div>
            </div>

            {/* Submit Button - Exactly matching Mockup 1: Dark Slate Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#2d3748] hover:bg-[#1a202c] active:bg-[#111827] text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 text-[#8ce03f]" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>No spam guarantee. Free & zero obligation.</span>
            </div>
          </form>
        </>
      ) : (
        /* Instant Estimate Calculated Result View */
        <div className="text-center py-2 animate-fadeIn space-y-4">
          <div className="w-14 h-14 bg-[#f2fce2] text-[#28581c] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-[#5ea828]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#356d1c] bg-[#e6f8ce] px-2.5 py-0.5 rounded-full">
              Estimated Ballpark
            </span>
            <div className="text-3xl font-extrabold text-slate-900 mt-2">
              ${estimateResult.totalMin} – ${estimateResult.totalMax}
              <span className="text-xs font-medium text-slate-500 block mt-0.5">
                {formData.frequency === 'weekly' ? 'per weekly visit' : formData.frequency === 'biweekly' ? 'per bi-weekly visit' : 'estimated total'}
              </span>
            </div>
          </div>

          {formData.bundleCleaning && (
            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3 text-xs text-left text-emerald-900">
              <div className="font-bold flex items-center text-emerald-800">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                GroundHelpClean Bundle Applied!
              </div>
              <p className="mt-0.5 text-slate-600">
                You saved ~${estimateResult.bundleSavings} with our indoor cleaning + outdoor lawn package discount.
              </p>
            </div>
          )}

          <div className="bg-slate-50 rounded-xl p-3.5 text-left text-xs space-y-1.5 border border-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-500">Contact:</span>
              <span className="font-semibold text-slate-800">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service Area:</span>
              <span className="font-semibold text-slate-800">{formData.zipCode} (Lexington, SC)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Next Step:</span>
              <span className="font-semibold text-[#28581c]">Satellite Yard Verification</span>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Thank you, {formData.name.split(' ')[0]}! We have received your request. A Ground Help specialist will verify your lot via GIS mapping and email your finalized proposal within 2 hours.
          </p>

          <button
            onClick={handleReset}
            className="text-xs text-[#28581c] hover:underline font-semibold"
          >
            ← Calculate Another Yard or Service
          </button>
        </div>
      )}
    </div>
  );
}
