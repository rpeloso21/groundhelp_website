import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import InstantQuoteCard from './InstantQuoteCard';

export default function QuoteModal({ isOpen, onClose, initialService = 'lawn-maintenance' }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-1">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:outline-none"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <InstantQuoteCard initialService={initialService} />
        </div>
      </div>
    </div>
  );
}
