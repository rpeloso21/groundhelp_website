import React from 'react';

// Custom SVG Icons recreating the whimsical & clean line-art style from Mockup 2
export function MowerIcon() {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-16 h-16" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Handle */}
        <path d="M25 15 L45 35" stroke="#333" strokeWidth="3" />
        <path d="M22 18 L28 12" stroke="#333" strokeWidth="3" />
        {/* Mower Body */}
        <path d="M40 45 L75 45 L78 35 L52 35 Z" fill="#8ce03f" stroke="#222" strokeWidth="2.5" />
        {/* Motor Engine Box */}
        <rect x="52" y="24" width="18" height="12" rx="2" fill="#e2e8f0" stroke="#222" strokeWidth="2" />
        {/* Wheels */}
        <circle cx="45" cy="54" r="8" fill="#fff" stroke="#222" strokeWidth="3" />
        <circle cx="45" cy="54" r="3" fill="#8ce03f" />
        <circle cx="75" cy="54" r="8" fill="#fff" stroke="#222" strokeWidth="3" />
        <circle cx="75" cy="54" r="3" fill="#8ce03f" />
        {/* Grass Tuft */}
        <path d="M85 58 L87 50 M88 58 L92 52" stroke="#65a30d" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function SpreaderIcon() {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-16 h-16" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Handle */}
        <path d="M30 15 L50 35 M70 15 L50 35" stroke="#333" strokeWidth="2.5" />
        {/* Hopper */}
        <polygon points="38,35 62,35 55,52 45,52" fill="#8ce03f" stroke="#222" strokeWidth="2.5" />
        {/* Stand / Wheels */}
        <circle cx="50" cy="62" r="7" fill="#fff" stroke="#222" strokeWidth="3" />
        <circle cx="50" cy="62" r="2.5" fill="#333" />
        {/* Broadcast Fertilizer Pellets */}
        <circle cx="34" cy="62" r="1.5" fill="#65a30d" />
        <circle cx="40" cy="67" r="1.5" fill="#65a30d" />
        <circle cx="60" cy="67" r="1.5" fill="#65a30d" />
        <circle cx="66" cy="62" r="1.5" fill="#65a30d" />
        <circle cx="50" cy="72" r="1.5" fill="#65a30d" />
      </svg>
    </div>
  );
}

export function AeratorIcon() {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-16 h-16" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Grass top */}
        <path d="M30 25 L33 15 M36 25 L38 12 M42 25 L45 16 M50 25 L50 12 M58 25 L56 14 M64 25 L68 15" stroke="#65a30d" strokeWidth="2.5" strokeLinecap="round" />
        {/* Plug Roller Drum */}
        <rect x="30" y="25" width="40" height="24" rx="4" fill="#8ce03f" stroke="#222" strokeWidth="2.5" />
        {/* Core spikes / tines */}
        <line x1="36" y1="49" x2="36" y2="58" stroke="#333" strokeWidth="2.5" />
        <line x1="44" y1="49" x2="44" y2="58" stroke="#333" strokeWidth="2.5" />
        <line x1="56" y1="49" x2="56" y2="58" stroke="#333" strokeWidth="2.5" />
        <line x1="64" y1="49" x2="64" y2="58" stroke="#333" strokeWidth="2.5" />
        {/* Core holes in turf */}
        <circle cx="36" cy="64" r="2" fill="#78350f" />
        <circle cx="44" cy="64" r="2" fill="#78350f" />
        <circle cx="56" cy="64" r="2" fill="#78350f" />
        <circle cx="64" cy="64" r="2" fill="#78350f" />
      </svg>
    </div>
  );
}

export default function ServiceCard({
  iconType = 'mower',
  customIcon = null,
  title,
  description,
  onLearnMore,
  startingAt,
  badge = null
}) {
  const renderIcon = () => {
    if (customIcon) return customIcon;
    switch (iconType) {
      case 'spreader':
        return <SpreaderIcon />;
      case 'aerator':
        return <AeratorIcon />;
      case 'mower':
      default:
        return <MowerIcon />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#bbf7d0] hover:border-[#8ce03f] p-7 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group">
      {badge && (
        <span className="absolute -top-3 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#8ce03f] text-[#141f17] shadow-sm">
          {badge}
        </span>
      )}

      {/* Icon Area */}
      <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
        {renderIcon()}
      </div>

      {/* Title matching Mockup 2 */}
      <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#28581c] transition-colors">
        {title}
      </h3>

      {/* Description text */}
      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {startingAt && (
        <div className="text-xs font-semibold text-slate-500 mb-4 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
          Starting at <span className="text-[#28581c] font-bold">{startingAt}</span>
        </div>
      )}

      {/* Learn More Button matching Mockup 2 */}
      <button
        onClick={onLearnMore}
        className="w-full sm:w-auto min-w-[130px] bg-[#8ce03f] hover:bg-[#7ecc34] active:bg-[#6eb828] text-[#141f17] font-semibold text-sm py-2.5 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-95"
      >
        Learn More
      </button>
    </div>
  );
}
