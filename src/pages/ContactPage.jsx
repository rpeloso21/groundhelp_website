import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function ContactPage({ onOpenQuoteModal }) {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Lawn Care Inquiry',
    message: ''
  });
  const [botField, setBotField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (botField) return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact-message',
        'bot-field': botField,
        ...contactForm
      }).toString()
    })
      .then(() => setFormSent(true))
      .catch((err) => {
        console.error('Contact form error:', err);
        setFormSent(true);
      });
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3.5 py-1 rounded-full">
            Lexington, SC Customer Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Get in Touch with GroundHelp
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Have questions about your lawn, soft washing, or scheduling our GroundHelpClean indoor maid team? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Contact Details
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <a
                  href={`tel:${companyConfig.rawPhone}`}
                  className="flex items-start space-x-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f2fce2] text-[#28581c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#28581c]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Phone Support</div>
                    <div className="text-sm font-semibold text-[#28581c]">{companyConfig.phone}</div>
                    <div className="text-xs text-slate-500">Call or Text Mon–Sat</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-start space-x-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Customer Service</div>
                    <div className="text-sm font-semibold text-slate-800">{companyConfig.email}</div>
                    <div className="text-xs text-slate-500">Prompt responses within 2 hours</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Base of Operations</div>
                    <div className="text-sm text-slate-800">{companyConfig.address}</div>
                    <div className="text-xs text-slate-500">Serving all of Lake Murray & the Midlands</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Operating Hours</div>
                    <div className="text-xs text-slate-600">{companyConfig.hours}</div>
                    <div className="text-xs text-slate-500">Closed Sundays for Family & Rest</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold py-3.5 rounded-xl text-xs transition-colors shadow"
                >
                  Use Instant Online Estimator →
                </button>
              </div>
            </div>

            {/* Service Areas Box */}
            <div className="bg-[#141f17] text-white rounded-3xl p-6 sm:p-7 shadow-md">
              <h4 className="text-base font-bold text-white mb-2 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8ce03f] mr-2"></span>
                Active Service Coverage Areas
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our trucks run scheduled recurring routes through these Midlands communities:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {companyConfig.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8ce03f]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
            {!formSent ? (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill out the quick form below and our team will get back to you promptly.
                </p>

                <form 
                  name="contact-message" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact-message" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Leave empty: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(803) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Service Topic
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                      >
                        <option value="Lawn Care Inquiry">Recurring Lawn Care (Mow, Edge, Blow)</option>
                        <option value="Landscape Care">Pine Straw / Mulch / Aeration</option>
                        <option value="Exterior Soft Wash">Exterior House / Pressure Washing</option>
                        <option value="GroundHelpClean">GroundHelpClean (Dedicated Indoor Maid Service)</option>
                        <option value="Commercial / HOA">Commercial Grounds or HOA Common Areas</option>
                        <option value="Other Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Message / Property Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your yard or home requirements..."
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#8ce03f] outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#141f17] hover:bg-[#1f3124] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-[#8ce03f]" />
                    <span>Send Message to GroundHelp</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#f2fce2] text-[#28581c] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#5ea828]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent, {contactForm.name}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to GroundHelp. We have received your inquiry and a Lexington team member will reply to {contactForm.email} within 2 hours during normal business hours.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs text-[#28581c] font-bold underline"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
