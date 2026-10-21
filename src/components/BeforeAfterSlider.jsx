import React, { useState } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After Ground Help',
  title = 'Real Midlands Transformations',
  subtitle = 'Drag the slider to reveal the difference professional lawn care and pressure washing makes.'
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeProject, setActiveProject] = useState('lawn');

  const projects = {
    lawn: {
      title: "Lexington Lawn Revival & Edging",
      subtitle: "Bermuda lawn with irregular growth transformed into a striped, precision-edged showcase.",
      beforeBg: "from-amber-900/60 to-yellow-950/70",
      afterBg: "from-emerald-950/40 to-green-950/70",
      beforeTag: "Overgrown & Weedy",
      afterTag: "Clean Cut & Razor Edged"
    },
    wash: {
      title: "Driveway & House Soft Wash",
      subtitle: "Heavy South Carolina mildew and red clay stains removed with safe, low-pressure washing.",
      beforeBg: "from-slate-900/80 to-stone-900/80",
      afterBg: "from-cyan-950/40 to-slate-950/60",
      beforeTag: "Mildew & Dirt Stains",
      afterTag: "Bright Restored Concrete"
    }
  };

  const current = projects[activeProject];

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#28581c] bg-[#e6f8ce] px-3 py-1 rounded-full">
            Visual Proof of Quality
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            {current.title}
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl">
            {current.subtitle}
          </p>
        </div>

        {/* Project Switcher */}
        <div className="mt-4 md:mt-0 flex space-x-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => { setActiveProject('lawn'); setSliderPosition(50); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeProject === 'lawn' 
                ? 'bg-[#141f17] text-[#8ce03f] shadow' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lawn & Edging
          </button>
          <button
            onClick={() => { setActiveProject('wash'); setSliderPosition(50); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeProject === 'wash' 
                ? 'bg-[#141f17] text-[#8ce03f] shadow' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Exterior Soft Wash
          </button>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-300 shadow-inner group"
        onMouseMove={handleSliderMove}
        onTouchMove={handleTouchMove}
      >
        {/* Underneath: The "After" Pristine State */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-end p-6"
          style={{
            backgroundImage: activeProject === 'lawn' 
              ? 'url("/images/top-down-lawn.jpeg")' 
              : 'url("/images/pressure-washing.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          <span className="relative z-10 px-3 py-1.5 bg-[#8ce03f] text-[#141f17] font-extrabold text-xs rounded-lg shadow-lg flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-[#141f17]" />
            <span>{afterLabel}: {current.afterTag}</span>
          </span>
        </div>

        {/* Overlaid: The "Before" State, clipped by the slider position */}
        <div
          className="absolute inset-0 h-full overflow-hidden flex items-center justify-start p-6"
          style={{ 
            width: `${sliderPosition}%`,
            borderRight: '3px solid #8ce03f'
          }}
        >
          {/* Mirrored background with darker, grungier filter */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center filter sepia brightness-[0.75] contrast-[0.9]"
            style={{
              backgroundImage: activeProject === 'lawn' 
                ? 'url("/images/top-down-lawn.jpeg")' 
                : 'url("/images/pressure-washing.jpeg")',
              width: '100%',
              minWidth: '100%',
            }}
          ></div>
          <div className="absolute inset-0 bg-amber-950/40 mix-blend-multiply"></div>
          
          <span className="relative z-10 px-3 py-1.5 bg-slate-900/90 text-white font-bold text-xs rounded-lg shadow-lg backdrop-blur-sm border border-white/20">
            {beforeLabel}: {current.beforeTag}
          </span>
        </div>

        {/* Slider Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#8ce03f] pointer-events-none transform -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-[#141f17] border-2 border-[#8ce03f] shadow-2xl flex items-center justify-center text-[#8ce03f]">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 mt-3 px-1">
        <span>← Slide Left for Before</span>
        <span className="font-medium text-slate-700">Drag or hover across image</span>
        <span>Slide Right for After →</span>
      </div>
    </div>
  );
}
