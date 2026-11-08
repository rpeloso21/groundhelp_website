import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Home, 
  Droplets, 
  Layers, 
  Info,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyConfig } from '../data/companyConfig';
import { logQuoteLead } from '../utils/analytics';

export default function InstantQuoteCard({ initialService = 'lawn-maintenance', compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '29072',
    serviceType: initialService,
    propertySize: 'medium', // small, medium, large, estate
    frequency: 'weekly', // weekly, biweekly, onetime
    bundleCleaning: false,
    // Specific exterior soft wash fields requested by owner
    exteriorStories: '1',
    exteriorSqft: '1500-2500',
    exteriorCondition: 'mild',
    exteriorFlatSurfaces: 'driveway-walkway',
    exteriorStructures: 'none',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimateResult, setEstimateResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [botField, setBotField] = useState('');

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  // Exact pricing engine based on owner's Website Price Ranges sheet
  const calculateEstimate = () => {
    let baseMin = 0;
    let baseMax = 0;
    let isEstimateOnly = false;
    let estimateNotice = '';

    if (formData.serviceType === 'lawn-maintenance') {
      // 1. Lawn Maintenance (Exact Sheet Ranges with 1.2x multiplier for bi-weekly)
      if (formData.propertySize === 'small') {
        baseMin = formData.frequency === 'biweekly' ? 54 : 45;
        baseMax = formData.frequency === 'biweekly' ? 66 : 55;
      } else if (formData.propertySize === 'medium') {
        baseMin = formData.frequency === 'biweekly' ? 67 : 56;
        baseMax = formData.frequency === 'biweekly' ? 91 : 76;
      } else if (formData.propertySize === 'large') {
        baseMin = formData.frequency === 'biweekly' ? 114 : 95;
        baseMax = formData.frequency === 'biweekly' ? 144 : 120;
      } else if (formData.propertySize === 'estate') {
        baseMin = formData.frequency === 'biweekly' ? 145 : 121;
        baseMax = formData.frequency === 'biweekly' ? 162 : 135;
      }
    } else if (formData.serviceType === 'landscape-seasonal') {
      // 2. Landscape & Seasonal Care
      if (formData.propertySize === 'small') {
        baseMin = 150;
        baseMax = 270;
      } else if (formData.propertySize === 'medium') {
        baseMin = 275;
        baseMax = 495;
      } else if (formData.propertySize === 'large') {
        baseMin = 500;
        baseMax = 750;
      } else if (formData.propertySize === 'estate') {
        // Estate 1+ acre is marked 'Estimate only' by owner
        isEstimateOnly = true;
        estimateNotice = 'Custom On-Site Walkthrough Required (Estate 1+ Acre)';
      }
    } else if (formData.serviceType === 'exterior-cleaning') {
      // 3. Exterior Soft Washing - Marked by owner as minimum charge + custom estimate
      isEstimateOnly = true;
      estimateNotice = 'Minimum: $150 (Flat Surfaces) • $275 (House Soft Wash)';
      baseMin = 150;
      baseMax = 275;
    } else if (formData.serviceType === 'ground-help-clean') {
      // 4. GroundHelpClean Interior (Waitlist Pricing from sheet)
      if (formData.propertySize === 'small') {
        baseMin = formData.frequency === 'biweekly' ? 136 : 115;
        baseMax = formData.frequency === 'biweekly' ? 159 : 135;
      } else if (formData.propertySize === 'medium') {
        baseMin = formData.frequency === 'biweekly' ? 171 : 145;
        baseMax = formData.frequency === 'biweekly' ? 218 : 185;
      } else {
        baseMin = formData.frequency === 'biweekly' ? 224 : 190;
        baseMax = formData.frequency === 'biweekly' ? 301 : 255;
      }
    } else if (formData.serviceType === 'commercial-hoa') {
      // 5. Commercial & HOA - Marked 'Estimate only'
      isEstimateOnly = true;
      estimateNotice = 'Itemized Commercial RFP & Walkthrough Required';
    } else if (formData.serviceType === 'christmas-lights') {
      // 6. Christmas Lights - Marked 'Estimate only'
      isEstimateOnly = true;
      estimateNotice = 'Custom Roofline Measurement & Design Required';
    }

    let bundleSavings = 0;
    let cleaningAddon = 0;
    if (formData.bundleCleaning && formData.serviceType !== 'ground-help-clean' && !isEstimateOnly) {
      cleaningAddon = 135;
      bundleSavings = Math.round((baseMin + cleaningAddon) * 0.10);
    }

    return {
      isEstimateOnly,
      estimateNotice,
      min: baseMin,
      max: baseMax,
      cleaningAddon,
      bundleSavings,
      totalMin: baseMin + cleaningAddon - bundleSavings,
      totalMax: baseMax + cleaningAddon - bundleSavings
    };
  };

  const isCurrentServiceEstimateOnly = 
    formData.serviceType === 'exterior-cleaning' ||
    formData.serviceType === 'commercial-hoa' ||
    formData.serviceType === 'christmas-lights' ||
    (formData.serviceType === 'landscape-seasonal' && formData.propertySize === 'estate');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (botField) return;
    const est = calculateEstimate();
    setEstimateResult(est);
    setSubmitting(true);

    const ballparkText = est.isEstimateOnly 
      ? est.estimateNotice 
      : `$${est.totalMin} - $${est.totalMax}`;

    // Save lead to Supabase cloud database
    logQuoteLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      zipCode: formData.zipCode,
      serviceType: formData.serviceType,
      propertySize: formData.propertySize,
      frequency: formData.frequency,
      bundleCleaning: formData.bundleCleaning,
      estimateRange: ballparkText,
      estimateMin: est.isEstimateOnly ? (est.min || 0) : est.totalMin,
      estimateMax: est.isEstimateOnly ? (est.max || 0) : est.totalMax
    });

    // Transmit lead to Netlify Forms via AJAX
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({
        'form-name': 'quote-request',
        'bot-field': botField,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        serviceType: formData.serviceType,
        propertySize: formData.propertySize,
        frequency: formData.frequency,
        bundleCleaning: formData.bundleCleaning ? 'Yes' : 'No',
        exteriorStories: formData.exteriorStories,
        exteriorSqft: formData.exteriorSqft,
        exteriorCondition: formData.exteriorCondition,
        exteriorSurfaces: formData.exteriorFlatSurfaces,
        estimateBallpark: ballparkText
      })
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#8ce03f', '#141f17', '#38bdf8', '#22c55e']
          });
        } catch (err) {}
      })
      .catch((err) => {
        console.error('Netlify form submission error:', err);
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-float p-6 sm:p-7 border border-[#e2ece3] max-w-md w-full relative z-10 transition-all">
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

          <form 
            name="quote-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="space-y-3.5"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden" aria-hidden="true">
              <label>
                Leave empty: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
              </label>
            </p>

            {/* Service Type Selection */}
            <div>
              <label htmlFor="quote-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Select Service
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
                <option value="exterior-cleaning">Exterior Soft Washing & Pressure Wash</option>
                <option value="christmas-lights">Holiday & Christmas Light Installation</option>
                <option value="commercial-hoa">Commercial Grounds & HOA Maintenance</option>
                <option value="ground-help-clean">GroundHelpClean (Coming Soon - Join Waitlist)</option>
              </select>
            </div>

            {/* Conditional Intake: If Lawn or Landscape */}
            {formData.serviceType !== 'exterior-cleaning' && formData.serviceType !== 'commercial-hoa' && formData.serviceType !== 'christmas-lights' && (
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
                    <option value="weekly">Weekly (Best Cut)</option>
                    <option value="biweekly">Bi-Weekly</option>
                    <option value="onetime">One-Time Service</option>
                  </select>
                </div>
              </div>
            )}

            {/* Conditional Intake for Exterior Soft Washing (Directly from Owner's Sheet) */}
            {formData.serviceType === 'exterior-cleaning' && (
              <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-xl p-3 space-y-2.5 text-xs">
                <div className="flex items-center space-x-1.5 text-sky-900 font-bold">
                  <Droplets className="w-3.5 h-3.5 text-sky-600" />
                  <span>Exterior Soft Wash Details</span>
                </div>
                <p className="text-[11px] text-sky-800">
                  Minimum service charge: <strong>$150</strong> (flat surfaces) / <strong>$275</strong> (house soft wash).
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Stories</label>
                    <select
                      value={formData.exteriorStories}
                      onChange={(e) => setFormData({ ...formData, exteriorStories: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800"
                    >
                      <option value="1">1-Story Home</option>
                      <option value="2">2-Story Home</option>
                      <option value="3">3+ Stories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Heated SqFt</label>
                    <select
                      value={formData.exteriorSqft}
                      onChange={(e) => setFormData({ ...formData, exteriorSqft: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800"
                    >
                      <option value="under-1500">&lt; 1,500 SqFt</option>
                      <option value="1500-2500">1,500 – 2,500 SqFt</option>
                      <option value="2500-3500">2,500 – 3,500 SqFt</option>
                      <option value="3500-plus">3,500+ SqFt</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Condition</label>
                    <select
                      value={formData.exteriorCondition}
                      onChange={(e) => setFormData({ ...formData, exteriorCondition: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800"
                    >
                      <option value="mild">Light/Mild Algae</option>
                      <option value="heavy">Very Dirty / Heavy Mildew</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Flat Surfaces</label>
                    <select
                      value={formData.exteriorFlatSurfaces}
                      onChange={(e) => setFormData({ ...formData, exteriorFlatSurfaces: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800"
                    >
                      <option value="house-only">House Siding Only</option>
                      <option value="driveway-walkway">Driveway & Walkway</option>
                      <option value="patio-pool">Patio / Pool Deck</option>
                      <option value="full-property">Full Exterior Package</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Note for Commercial / Christmas Lights (Estimate Only Notice) */}
            {(formData.serviceType === 'commercial-hoa' || formData.serviceType === 'christmas-lights') && (
              <div className="bg-[#f8faf8] border border-slate-200 rounded-xl p-3 text-xs text-slate-600 flex items-start space-x-2">
                <Info className="w-4 h-4 text-[#28581c] flex-shrink-0 mt-0.5" />
                <span>
                  {formData.serviceType === 'commercial-hoa'
                    ? 'Commercial & HOA maintenance requires an on-site property walkthrough to provide itemized board RFP proposals.'
                    : 'Holiday lighting packages are custom-designed and measured to your specific roofline with commercial-grade LEDs.'}
                </span>
              </div>
            )}

            {/* Estate Notice for Landscape */}
            {formData.serviceType === 'landscape-seasonal' && formData.propertySize === 'estate' && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-xs text-amber-900 flex items-center space-x-2">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>1+ Acre estate landscape refreshes require custom on-site walkthrough estimates.</span>
              </div>
            )}

            {/* GroundHelpClean Add-on Bundle Checkbox */}
            {formData.serviceType === 'lawn-maintenance' && (
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
                    Bundle GroundHelpClean (Coming Soon - Waitlist)
                  </span>
                  Reserve 10% lawn care savings when our interior cleaning crew launches.
                </label>
              </div>
            )}

            {/* Customer Contact Details */}
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
                className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
              />
            </div>

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
                className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
              />
            </div>

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
                  className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
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
                  className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8ce03f] placeholder-slate-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 bg-[#2d3748] hover:bg-[#1a202c] active:bg-[#111827] text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <span>{isCurrentServiceEstimateOnly ? 'Request Custom Proposal' : 'Get Instant Pricing'}</span>
              <ArrowRight className="w-4 h-4 text-[#8ce03f]" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero obligation • Free proposal for Lexington properties</span>
            </div>
          </form>
        </>
      ) : (
        /* Result Screen */
        <div className="text-center py-2 animate-fadeIn space-y-4">
          <div className="w-14 h-14 bg-[#f2fce2] text-[#28581c] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-[#5ea828]" />
          </div>

          {!estimateResult.isEstimateOnly ? (
            /* Standard Calculated Ballpark */
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#356d1c] bg-[#e6f8ce] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                Estimated Ballpark
              </span>
              <div className="text-3xl font-extrabold text-slate-900 mt-2">
                ${estimateResult.totalMin} – ${estimateResult.totalMax}
                <span className="text-xs font-medium text-slate-500 block mt-0.5">
                  {formData.frequency === 'weekly' ? 'per weekly visit' : formData.frequency === 'biweekly' ? 'per bi-weekly visit' : 'estimated total'}
                </span>
              </div>
            </div>
          ) : (
            /* Estimate Only Result */
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                Custom Estimate Requested
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-3">
                {formData.serviceType === 'exterior-cleaning'
                  ? 'Soft Wash Estimate in Progress'
                  : 'Proposal Request Received'}
              </h4>
              {formData.serviceType === 'exterior-cleaning' && (
                <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                  Minimum service charge: <strong>$150</strong> (flat surfaces) / <strong>$275</strong> (house wash).
                </p>
              )}
            </div>
          )}

          {formData.bundleCleaning && (
            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3 text-xs text-left text-emerald-900">
              <div className="font-bold flex items-center text-emerald-800">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                GroundHelpClean Launch Waitlist Reserved!
              </div>
              <p className="mt-0.5 text-slate-600">
                Your 10% lawn care discount will automatically apply once our residential cleaning division launches.
              </p>
            </div>
          )}

          <div className="bg-slate-50 rounded-xl p-3.5 text-left text-xs space-y-1.5 border border-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-500">Contact:</span>
              <span className="font-semibold text-slate-800">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-slate-800 capitalize">
                {formData.serviceType.replace('-', ' ')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service Area:</span>
              <span className="font-semibold text-slate-800">{formData.zipCode} (Lexington, SC)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Next Step:</span>
              <span className="font-semibold text-[#28581c]">Satellite Yard & Property Verification</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Thank you, {formData.name.split(' ')[0]}! A GroundHelp property specialist is reviewing your property via GIS mapping and will email your finalized, locked-in proposal within 2 hours.
          </p>

          <button
            onClick={handleReset}
            className="text-xs text-[#28581c] hover:underline font-semibold"
          >
            ← Calculate Another Service or Yard
          </button>
        </div>
      )}
    </div>
  );
}
