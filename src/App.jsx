import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import LawnServicesPage from './pages/LawnServicesPage';
import ExteriorCleaningPage from './pages/ExteriorCleaningPage';
import GroundHelpCleanPage from './pages/GroundHelpCleanPage';
import CommercialHoaPage from './pages/CommercialHoaPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Phone, Calculator } from 'lucide-react';
import { companyConfig } from './data/companyConfig';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('lawn-maintenance');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'lawn', 'exterior', 'cleaning', 'commercial', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (service = 'lawn-maintenance') => {
    setQuoteInitialService(service);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'lawn':
        return <LawnServicesPage onOpenQuoteModal={openQuoteModal} onNavigate={navigateTo} />;
      case 'exterior':
        return <ExteriorCleaningPage onOpenQuoteModal={openQuoteModal} onNavigate={navigateTo} />;
      case 'cleaning':
        return <GroundHelpCleanPage onOpenQuoteModal={openQuoteModal} onNavigate={navigateTo} />;
      case 'commercial':
        return <CommercialHoaPage onOpenQuoteModal={openQuoteModal} />;
      case 'about':
        return <AboutPage onOpenQuoteModal={openQuoteModal} onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onOpenQuoteModal={openQuoteModal} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} onOpenQuoteModal={openQuoteModal} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-[#8ce03f] selection:text-[#141f17]">
      {/* Sticky Main Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={navigateTo} 
        onOpenQuoteModal={openQuoteModal} 
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenQuoteModal={openQuoteModal} 
      />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        initialService={quoteInitialService}
      />

      {/* Mobile Floating Bottom Bar for Quick Call & Instant Quote */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#141f17]/95 backdrop-blur-md border border-[#2b4c34] p-2 rounded-2xl shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${companyConfig.rawPhone}`}
          className="flex-1 bg-[#1e3424] text-[#8ce03f] font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (803)</span>
        </a>

        <button
          onClick={() => openQuoteModal()}
          className="flex-1 bg-[#8ce03f] text-[#141f17] font-extrabold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-all"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Instant Quote</span>
        </button>
      </div>
    </div>
  );
}
