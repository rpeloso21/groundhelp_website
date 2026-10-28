import React, { useState } from 'react';
import { Leaf, ChevronDown, Menu, X, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function Navbar({ activePage, setActivePage, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Residential', id: 'lawn' },
    { label: 'GroundHelpClean', id: 'cleaning', badge: 'Dedicated Crew' },
    { label: 'Commercial & HOA', id: 'commercial' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#141f17] text-white border-b border-[#223528] shadow-md">
      {/* Top micro bar with Lexington SC & Phone */}
      <div className="bg-[#0e1610] text-xs text-slate-400 py-1.5 px-4 sm:px-8 border-b border-[#1b2b20]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8ce03f]"></span>
            <span>Serving Lexington, Lake Murray & Columbia Midlands, SC</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span className="flex items-center text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8ce03f] mr-1" />
              Licensed & Insured
            </span>
            <a 
              href={`tel:${companyConfig.rawPhone}`} 
              className="flex items-center font-semibold text-[#8ce03f] hover:text-[#a3f05a] transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              {companyConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - exactly matching Mockup 1 */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 focus:outline-none group text-left"
          aria-label="Ground Help Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#8ce03f] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Leaf className="w-6 h-6 text-[#141f17] fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white flex items-center">
              Ground<span className="text-[#8ce03f]">Help</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1">
              Lexington, SC
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="flex items-center space-x-1 py-2 text-slate-200 hover:text-[#8ce03f] transition-colors focus:outline-none"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#8ce03f]' : ''}`} />
            </button>

            {/* Dropdown panel */}
            {servicesDropdownOpen && (
              <div 
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute left-0 mt-1 w-72 rounded-xl bg-[#1a291f] border border-[#2d4434] shadow-2xl py-2 z-50 animate-fadeIn"
              >
                <button
                  onClick={() => handleNavClick('lawn')}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#23382a] flex items-start space-x-3 transition-colors"
                >
                  <Leaf className="w-5 h-5 text-[#8ce03f] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">Lawn Maintenance</div>
                    <div className="text-xs text-slate-400">Mowing, trimming, edging & blowing</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('lawn')}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#23382a] flex items-start space-x-3 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-[#2d4434] text-[#8ce03f] flex items-center justify-center text-xs font-bold mt-0.5">🌿</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Landscape & Seasonal</div>
                    <div className="text-xs text-slate-400">Pine straw, mulch & weed control</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('exterior')}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#23382a] flex items-start space-x-3 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-[#2d4434] text-cyan-400 flex items-center justify-center text-xs font-bold mt-0.5">💧</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Exterior Cleaning</div>
                    <div className="text-xs text-slate-400">Soft wash siding & pressure washing</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    handleNavClick('home');
                    setTimeout(() => {
                      const el = document.getElementById('holiday-lights-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#23382a] flex items-start space-x-3 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-[#2d4434] text-amber-300 flex items-center justify-center text-xs font-bold mt-0.5">✨</div>
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center">
                      Christmas Light Hanging
                      <span className="ml-1.5 px-1.5 py-0.5 text-[9px] bg-amber-400/20 text-amber-300 rounded font-bold uppercase">
                        Seasonal
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Custom design, install & takedown</div>
                  </div>
                </button>

                <div className="border-t border-[#263c2c] my-1"></div>

                <button
                  onClick={() => handleNavClick('cleaning')}
                  className="w-full text-left px-4 py-2.5 bg-[#203627] hover:bg-[#284431] flex items-start space-x-3 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-[#8ce03f] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#8ce03f] text-sm flex items-center">
                      GroundHelpClean
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-[#8ce03f]/20 text-[#8ce03f] rounded font-bold uppercase">
                        Indoor Crew
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">Dedicated residential house cleaning</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`py-2 text-slate-200 hover:text-[#8ce03f] transition-colors ${activePage === 'about' ? 'text-[#8ce03f] font-semibold' : ''}`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('lawn')}
            className={`py-2 text-slate-200 hover:text-[#8ce03f] transition-colors ${activePage === 'lawn' ? 'text-[#8ce03f] font-semibold' : ''}`}
          >
            Residential
          </button>

          <button
            onClick={() => handleNavClick('cleaning')}
            className={`py-2 text-slate-200 hover:text-[#8ce03f] transition-colors flex items-center space-x-1.5 ${activePage === 'cleaning' ? 'text-[#8ce03f] font-semibold' : ''}`}
          >
            <span>GroundHelpClean</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-[#8ce03f]/20 text-[#8ce03f] rounded-full border border-[#8ce03f]/40 font-medium">
              Indoor Crew
            </span>
          </button>

          <button
            onClick={() => handleNavClick('commercial')}
            className={`py-2 text-slate-200 hover:text-[#8ce03f] transition-colors ${activePage === 'commercial' ? 'text-[#8ce03f] font-semibold' : ''}`}
          >
            Commercial & HOA
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`py-2 text-slate-200 hover:text-[#8ce03f] transition-colors ${activePage === 'contact' ? 'text-[#8ce03f] font-semibold' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button - matching Mockup 1 */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center space-x-1.5"
          >
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#8ce03f] text-[#141f17] font-semibold px-3 py-1.5 rounded-lg text-xs"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#203124] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16231a] border-b border-[#263c2c] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                activePage === item.id 
                  ? 'bg-[#223829] text-[#8ce03f]' 
                  : 'text-slate-200 hover:bg-[#1e2f23] hover:text-[#8ce03f]'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[11px] px-2 py-0.5 bg-[#8ce03f]/20 text-[#8ce03f] rounded-full border border-[#8ce03f]/30">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-[#263c2c] flex flex-col space-y-2">
            <a
              href={`tel:${companyConfig.rawPhone}`}
              className="flex items-center justify-center py-2 text-slate-300 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 mr-2 text-[#8ce03f]" />
              Call: {companyConfig.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#8ce03f] text-[#141f17] font-bold py-3 rounded-xl text-center text-sm shadow"
            >
              Get a Free Instant Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
