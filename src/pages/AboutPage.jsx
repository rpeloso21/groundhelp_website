import React from 'react';
import { 
  ShieldCheck, 
  Leaf, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Quote, 
  Heart, 
  Award,
  ArrowRight
} from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function AboutPage({ onOpenQuoteModal, onNavigate }) {
  const teamMembers = [
    {
      name: "Nick Stevens",
      role: "Co-Founder",
      image: "/images/co-founder-nick.png",
      badge: "Vision & Operations",
      bio: "Husband, father of two girls, and passionate about building a company rooted in faith, family, and doing things the right way. Bringing deep construction services and project management experience, Nick founded GroundHelp to raise the standard for property care in Lexington with dependable people, clear communication, and pride in every lawn."
    },
    {
      name: "Alejandra Stevens",
      role: "Co-Founder & Director of Safety",
      image: "/images/co-founder-alejandra.png",
      badge: "15+ Yrs Safety & Ecology",
      bio: "Alejandra brings more than 15 years of health, safety, and environmental experience to GroundHelp. Holding a Master’s in Occupational Health and Safety Management, a Bachelor’s in Ecology, and certification as an IRCA Auditor, she guides our safe field practices, eco-conscious standards, and organized quality operations."
    },
    {
      name: "Billy",
      role: "General Manager",
      image: "/images/general-manager-billy.jpg",
      badge: "Operations & Leadership",
      bio: "Originally from Sumter, SC, Billy and his wife, Kirsten, are proud Midlands natives with deep Lexington roots. After several successful years on the Lowe's Corporate Sales Team, Billy brings high-level leadership and relationship-building to GroundHelp. A lifelong Gamecocks fan, Billy believes strongly in the power of serving others and building lasting community trust."
    },
    {
      name: "Joshua",
      role: "Crew Leader",
      image: "/images/crew-leader-joshua.jpg",
      badge: "20+ Yrs Turf Experience",
      bio: "With over two decades of hands-on property maintenance and turf care experience, Joshua leads our field teams with expert practical knowledge. Dependable, honest, and meticulous, Joshua takes immense personal pride in his craft, ensuring every homeowner's yard receives razor-sharp edging and pristine care."
    }
  ];

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full border border-[#bbf7d0]">
            Locally Owned & Operated in Lexington, SC
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
            About GroundHelp
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Built on faith, family, and hard work — dedicated to raising the standard for residential lawn care and exterior property maintenance across the Midlands.
          </p>
        </div>

        {/* 2. Founding Story: Setting a Higher Standard */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-soft">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#f2fce2] px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Built to Set a Higher Standard
              </h2>
            </div>

            {/* Founder's Letter / Story */}
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                My connection to lawn care and landscaping began long before GroundHelp was ever an idea. Growing up, I spent countless weekends mowing lawns for neighbors, saving every dollar I could toward my next dirt bike. What started as a way to earn spending money became something I genuinely enjoyed. I loved working outdoors, taking pride in a freshly cut lawn, and seeing the tangible results of a hard day’s work.
              </p>
              <p>
                Life eventually took me into the construction services industry, working in a variety of roles from field technician to estimating, sales, and project management. Along the way, I learned what it takes to build strong relationships and the crucial difference between companies that simply get the job done and those that consistently deliver an exceptional customer experience.
              </p>
              <p>
                As life progressed, so did my priorities. My wife, Alejandra, and I made the decision to relocate our family to South Carolina, wanting to spend more time together and be more present in our two young daughters’ lives. During that chapter, my primary responsibility wasn’t climbing a corporate ladder — it was being a dad.
              </p>
              <p>
                As our girls entered school, I saw an opportunity to pursue what I’d loved since childhood, combining it with years of professional project management experience and a fresh perspective. That opportunity became <strong>GroundHelp</strong>.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="bg-gradient-to-r from-[#141f17] to-[#1e3423] text-white p-7 sm:p-9 rounded-2xl shadow-md relative overflow-hidden my-8">
              <Quote className="w-16 h-16 text-[#8ce03f]/15 absolute -top-2 -left-2 pointer-events-none" />
              <blockquote className="relative z-10 text-lg sm:text-xl font-medium leading-relaxed italic text-slate-100">
                “I didn’t start GroundHelp simply to mow lawns. I started it to build a company that sets a higher standard — built around dependable people, consistent quality, clear communication, and genuine pride in our work.”
              </blockquote>
              <div className="mt-4 flex items-center space-x-3 text-sm text-[#8ce03f] font-bold">
                <span>— Nick Stevens</span>
                <span className="text-slate-400 font-normal">| Co-Founder, GroundHelp</span>
              </div>
            </div>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                We believe Lexington homeowners deserve more than someone who simply shows up unannounced and cuts the grass. You deserve a team that respects your property, values your time, communicates the night before so you know to turn off your sprinklers, and stands 100% behind its work.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#f8faf8] p-5 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#8ce03f]/20 text-[#28581c] flex items-center justify-center font-bold mb-3">
                  <Heart className="w-5 h-5 text-[#28581c]" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Faith & Family</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Treating every customer, crew member, and neighbor with genuine integrity, honesty, and care.
                </p>
              </div>

              <div className="bg-[#f8faf8] p-5 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#8ce03f]/20 text-[#28581c] flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#28581c]" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Accountability</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated visit alerts, sharp vertical blade edging, pool protection, and guaranteed satisfaction.
                </p>
              </div>

              <div className="bg-[#f8faf8] p-5 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#8ce03f]/20 text-[#28581c] flex items-center justify-center font-bold mb-3">
                  <Award className="w-5 h-5 text-[#28581c]" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Higher Standard</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Commercial-grade equipment, sharp blades, and clean uniforms representing our community proudly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Meet the Team Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full border border-[#bbf7d0]">
              The People Behind GroundHelp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Meet Our Team
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Dedicated professionals working together to keep Lexington and Lake Murray properties immaculate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
              >
                {/* Photo Header */}
                <div className="aspect-[4/5] w-full bg-slate-100 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#141f17]/85 backdrop-blur-sm text-[#8ce03f] border border-[#2b4431]">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#28581c] uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA Section */}
        <div className="text-center bg-gradient-to-br from-[#141f17] to-[#1d3324] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-[#27442f]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8ce03f] bg-[#8ce03f]/15 px-3 py-1 rounded-full border border-[#8ce03f]/30">
            Join the GroundHelp Family
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-3">
            Experience the GroundHelp Difference
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Get an instant ballpark estimate for your property in seconds or reach out directly to speak with our Lexington team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Get Free Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#203525] hover:bg-[#294631] border border-[#385e42] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
