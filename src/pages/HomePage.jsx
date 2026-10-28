import React, { useState } from 'react';
import { 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Phone, 
  Sparkles, 
  ChevronDown, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Layers,
  Droplets
} from 'lucide-react';
import InstantQuoteCard from '../components/InstantQuoteCard';
import ServiceCard from '../components/ServiceCard';
import GroundHelpCleanBanner from '../components/GroundHelpCleanBanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { companyConfig } from '../data/companyConfig';

export default function HomePage({ onNavigate, onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      {/* =========================================================================
          HERO SECTION - Faithful Re-creation of Mockup 1
          Split Layout: Headline on left, Pristine lawn & Instant Quote card on right
      ========================================================================== */}
      <section className="relative overflow-hidden bg-[#f4f7f4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Column: Typography & CTAs (Mockup 1) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#d2f3a6] shadow-sm text-[#28581c] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#8ce03f]"></span>
                <span>Lexington, SC & Lake Murray Preferred Grounds Care</span>
              </div>

              {/* Exact Mockup 1 Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Professional Lawn Care, <br className="hidden sm:inline" />
                <span className="text-[#141f17]">Unmatched</span> <span className="text-[#32731c]">Results.</span>
              </h1>

              {/* Exact Mockup 1 Subtext */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Reliable recurring mowing, crisp vertical edging, and debris blowing. Dedicated to keeping Lexington yards healthy, clean, and pristine all season long.
              </p>

              {/* Hero CTA buttons (Mockup 1: "Explore Services" + Call button) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-3.5 rounded-xl border border-slate-300 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-sm"
                >
                  Explore Services
                </button>

                <a
                  href={`tel:${companyConfig.rawPhone}`}
                  className="bg-[#141f17] hover:bg-[#1f3124] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md text-sm flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-[#8ce03f]" />
                  <span>Call {companyConfig.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium border-t border-slate-200">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                  <span>Weekly & Bi-Weekly Routes</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                  <span>No Long-Term Contracts</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                  <span>Licensed & Fully Insured</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Pristine Lawn Photo with Instant Quote Overlay Card (Mockup 1) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              {/* Background Striped Lawn Photo Container */}
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="/images/lawn-mowing.jpeg"
                  alt="Professional lawn care and mowing in Lexington SC"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>

                {/* Floating Instant Quote Card anchored over the lawn image */}
                <div className="relative z-10 p-3 sm:p-6 flex items-center justify-center">
                  <InstantQuoteCard />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST STATS BAR
      ========================================================================== */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {companyConfig.stats.map((stat, idx) => (
            <div key={idx} className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#28581c] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COMPLETE LAWN CARE SOLUTIONS - Faithful Re-creation of Mockup 2
          Header: "Complete Lawn Care Solutions"
          Subhead: "From precise mowing to custom nutrition programs..."
          3-Card Grid: Routine Mowing, Fertilization & Weed Control, Aeration & Overseeding
      ========================================================================== */}
      <section id="services-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Lawn Care Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From precise mowing to custom nutrition programs, we keep your lawn healthy and pristine year-round.
          </p>
        </div>

        {/* 3 Cards Grid exactly like Mockup 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Routine Mowing */}
          <ServiceCard
            iconType="mower"
            title="Routine Mowing"
            description="Professional lawn care with recurring scheduled mowing, sharp vertical blade edging along concrete, string trimming around obstacles, and full debris blow-off."
            startingAt="$45 / visit"
            onLearnMore={() => onNavigate('lawn')}
          />

          {/* Card 2: Fertilization & Weed Control */}
          <ServiceCard
            iconType="spreader"
            title="Fertilization & Weed Control"
            description="Lawn aeration with custom nutrient blends formulated for South Carolina soil. Pre-emergent weed defense and targeted treatments keep turf thick and vibrant."
            startingAt="$60 / treatment"
            onLearnMore={() => onNavigate('lawn')}
          />

          {/* Card 3: Aeration & Overseeding */}
          <ServiceCard
            iconType="aerator"
            title="Aeration & Overseeding"
            description="Core plug aeration relieves deep clay soil compaction so oxygen, water, and nutrients reach grassroots, paired with seasonal overseeding for lush turf density."
            startingAt="$140 / service"
            onLearnMore={() => onNavigate('lawn')}
          />
        </div>

        {/* Secondary Services Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-soft max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#f2fce2] text-[#28581c] flex items-center justify-center font-bold text-xl flex-shrink-0">
              🌿
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Need SC Long-Leaf Pine Straw or Fresh Mulch?</h4>
              <p className="text-xs text-slate-600">We deliver, tuck, and roll borders for a clean landscape refresh.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('lawn')}
            className="text-xs font-bold text-[#141f17] bg-[#8ce03f] hover:bg-[#7ecc34] px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            Explore Landscape Services →
          </button>
        </div>
      </section>

      {/* =========================================================================
          SEASONAL SPOTLIGHT: HOLIDAY & CHRISTMAS LIGHT INSTALLATION
      ========================================================================== */}
      <section id="holiday-lights-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a271d] via-[#1f3325] to-[#142318] text-white rounded-3xl p-8 sm:p-12 border border-[#2d4934] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#8ce03f]/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span>✨ Seasonal Service • Limited Slots Available</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Professional Holiday & <br />
                <span className="text-amber-300">Christmas Light</span> Installation
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take the hazard and hassle out of the holidays. Ground Help provides complete, hands-off holiday lighting for Lexington homes and businesses — custom cut to your roofline, safely installed, maintained all season, and neatly taken down and stored.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>Custom Commercial LEDs:</strong> Tailored to fit your gutters & roofline</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>In-Season Maintenance:</strong> Free bulb replacement if one goes out</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>Takedown & Storage:</strong> Labeled and packed away for next year</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>100% Insured:</strong> Keep your family safely off high ladders</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('christmas-lights')}
                  className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center space-x-2"
                >
                  <span>Get Holiday Light Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${companyConfig.rawPhone}`}
                  className="text-xs text-slate-300 hover:text-white font-semibold flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
                  Call {companyConfig.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 group">
                <img
                  src="/images/Christmas-light-hanging.jpeg"
                  alt="Professional Christmas light hanging and roofline lighting in Lexington SC"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/20 text-xs text-white">
                  <div className="font-bold flex items-center text-amber-300 mb-0.5">
                    <span>✨ Complete Hands-Off Service</span>
                  </div>
                  <span className="text-slate-300 text-[11px]">Design, Install, In-Season Maintenance, Takedown & Storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EXTERIOR CLEANING & PRESSURE WASHING
      ========================================================================== */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Droplets className="w-3.5 h-3.5" />
                <span>Exterior Soft Washing & Pressure Wash</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Wash Away Midlands Mildew, Algae & Red Clay.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Lexington's warm humidity promotes rapid green algae growth on vinyl siding and dark stains across driveways and patios. Our specialized low-pressure soft washing cleans gently without stripping siding or damaging seals.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>House Soft Wash:</strong> Safe cleaning for vinyl, painted wood, hardy plank, and stucco.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>Driveway & Patio Pressure Washing:</strong> High-flow rotary surface cleaners restore bright concrete.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8ce03f] flex-shrink-0 mt-0.5" />
                  <span><strong>Gutter Cleaning:</strong> Complete debris clearing, downspout flushing, and exterior face brightening.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('exterior')}
                  className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  Learn About Pressure Washing
                </button>
                <button
                  onClick={() => onOpenQuoteModal('exterior-cleaning')}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl text-sm border border-slate-700 transition-colors"
                >
                  Get Wash Estimate
                </button>
              </div>
            </div>

            {/* Right Side Visual Proof */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-xl">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 mr-2" />
                  Why Soft Washing Matters
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Standard high-pressure blasters can force water beneath siding laps and blow out window caulk seals. Our calibrated soft washing combines safe eco-detergents with gentle rinse pressures, killing algae at the root.
                </p>

                <div className="grid grid-cols-2 gap-3 text-center text-xs">
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700">
                    <div className="text-cyan-400 font-bold text-base">Low Pressure</div>
                    <div className="text-slate-400 mt-1">Under 300 PSI on home siding</div>
                  </div>
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700">
                    <div className="text-[#8ce03f] font-bold text-base">100% Plant Safe</div>
                    <div className="text-slate-400 mt-1">Pre-rinsed landscape protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: GROUNDHELPCLEAN - Dedicated Residential Cleaning Division
      ========================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GroundHelpCleanBanner 
          onNavigateToClean={() => onNavigate('cleaning')}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      </div>

      {/* =========================================================================
          SECTION 5: INTERACTIVE BEFORE & AFTER SLIDER
      ========================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider />
      </div>

      {/* =========================================================================
          SECTION 6: COMMERCIAL & HOA MAINTENANCE
      ========================================================================== */}
      <section className="py-16 sm:py-20 bg-[#f3f7f3] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3 py-1 rounded-full">
                  Commercial Properties & Neighborhood HOAs
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Maintain Community Value & Commercial Curb Appeal
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ground Help partners with subdivision HOA boards, business parks, and retail centers throughout Lexington and Lake Murray. From common area turf mowing and retention pond edging to neighborhood group discounts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                    <span>HOA Entrances & Amenity Grounds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                    <span>Neighborhood Group Rate Program (10-15% Off)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                    <span>Retention Basin & Buffer Trimming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8ce03f]" />
                    <span>Clear Monthly Commercial Billing</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('commercial')}
                    className="bg-[#141f17] hover:bg-[#1e2e23] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                  >
                    HOA & Commercial RFP Services
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal('commercial-hoa')}
                    className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                  >
                    Request Commercial Bid
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#141f17] to-[#1c3024] text-white p-6 sm:p-7 rounded-2xl shadow-md space-y-4">
                <div className="flex items-center space-x-2 text-[#8ce03f]">
                  <Users className="w-5 h-5" />
                  <span className="font-bold text-sm">Neighborhood Group Discount</span>
                </div>
                <h4 className="text-xl font-bold text-white">Do 3+ Neighbors Want Service?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When 3 or more neighbors on your Lexington street or cul-de-sac sign up for weekly lawn care or driveway pressure washing on the same day, everyone receives our special <strong>Neighborhood Route Discount</strong>!
                </p>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="w-full bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Inquire About Your Neighborhood
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: REVIEWS & TESTIMONIALS
      ========================================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3 py-1 rounded-full">
            Lexington SC Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Trusted by Homeowners Across the Midlands
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Hear from local residents and HOA presidents who rely on Ground Help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyConfig.testimonials.map((review, i) => (
            <div 
              key={i} 
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 mb-3 text-amber-400">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{review.name}</div>
                <div className="text-xs text-[#28581c] font-semibold">{review.neighborhood}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{review.service}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FAQ ACCORDION
      ========================================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Everything you need to know about our lawn care, soft washing, and GroundHelpClean indoor crew.
            </p>
          </div>

          <div className="space-y-3">
            {companyConfig.faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${openFaq === index ? 'rotate-180 text-[#28581c]' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 py-4 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
