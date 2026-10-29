import React from 'react';
import { ArrowRight, Sparkles, Droplets, Wind, Shield } from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#E9E6DE] pt-4 pb-16 lg:pb-24 border-b border-[#131313]/15">
      {/* Background Ghost Typography Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 select-none pointer-events-none flex justify-center overflow-hidden z-0"
      >
        <span className="font-anton text-[16vw] leading-none text-[#131313]/5 tracking-wider whitespace-nowrap uppercase">
          MODERN.SURF
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Bold Signal Orange "MODERN" + Editorial Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 pt-2">
          {/* Left: Giant MODERN */}
          <div className="md:col-span-7 lg:col-span-8">
            <h1 className="font-anton text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-[#EB450E] uppercase select-none">
              MODERN
            </h1>
          </div>

          {/* Right: Product Microcopy */}
          <div className="md:col-span-5 lg:col-span-4 md:pt-4 lg:pt-6 md:pl-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#D3FE89] text-[#131313] text-[10px] font-mono-code font-bold px-2 py-0.5 uppercase tracking-widest">
                LANÇAMENTO
              </span>
              <span className="font-mono-code text-[11px] font-bold text-[#504718] tracking-widest uppercase">
                ESTD 2026 · SANTOS - BR
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#131313]/80 font-medium max-w-sm">
              Boné Five Panel de Tactel. Poliamida crinkle hydro-repellent de secagem ultrarrápida, corda náutica frontal trançada e aba anatômica com memória de formato. Conforto térmico absoluto e extrema leveza (58g).
            </p>
          </div>
        </div>

        {/* Center Main Stage: Five Panel Tactel Showcase */}
        <div className="relative mt-2 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px] md:min-h-[580px]">
          
          {/* Left Anchor: SHOP NOW + 2026 + SURF */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-between h-full py-4 space-y-12">
            {/* Shop Now Button with extending hairline rule */}
            <div className="relative flex items-center">
              <div className="hidden sm:block w-16 md:w-28 h-px bg-[#EB450E]/40 mr-4" />
              <button
                onClick={onShopClick}
                className="group relative px-6 py-3 border-2 border-[#131313] hover:border-[#EB450E] bg-[#131313] hover:bg-[#EB450E] text-white transition-all duration-300 font-bold tracking-[0.25em] text-xs uppercase flex items-center gap-2.5 cursor-pointer shadow-lg hover:scale-105"
              >
                <span>COMPRAR BONÉ</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Feature Pills */}
            <div className="space-y-2 pt-4">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1 text-[11px] font-mono-code font-bold text-[#131313] border border-neutral-300">
                <Droplets className="w-3.5 h-3.5 text-[#EB450E]" />
                <span>TACTEL REPELENTE À ÁGUA</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1 text-[11px] font-mono-code font-bold text-[#131313] border border-neutral-300 block">
                <Wind className="w-3.5 h-3.5 text-[#504718]" />
                <span>PESO ULTRA-LEVE: 58 GRAMAS</span>
              </div>
            </div>

            {/* Bottom Left Meta: Vertical 2026 + EST. SURF */}
            <div className="flex items-end gap-6 pt-8 lg:pt-16">
              {/* Vertical Year */}
              <div className="border border-[#131313]/30 px-1.5 py-3 flex items-center justify-center bg-white/60">
                <span className="font-mono-code text-[11px] font-bold tracking-widest text-[#131313] [writing-mode:vertical-rl] rotate-180">
                  2026
                </span>
              </div>

              {/* EST. and Giant SURF */}
              <div>
                <span className="block font-mono-code text-[11px] font-bold tracking-[0.25em] text-[#504718] uppercase">
                  ESTD. SANTOS
                </span>
                <span className="font-anton text-7xl sm:text-8xl md:text-9xl text-[#131313] leading-[0.8] tracking-tight block">
                  SURF
                </span>
              </div>
            </div>
          </div>

          {/* Center: The Official Five Panel Tactel Cap (Hero Cap Presentation) */}
          <div className="lg:col-span-4 relative flex justify-center items-center my-6 lg:my-0 z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center group cursor-pointer" onClick={onShopClick}>
              
              {/* Subtle halo glow in Acid Lime & Signal Orange */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#D3FE89]/30 to-[#EB450E]/20 blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              
              {/* Authentic 5-Panel Tactel Cap Image */}
              <img
                src="/assets/crops/bone-five-ancora.png"
                alt="Boné Five Panel de Tactel MODERN.SURF com corda trançada"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />

              {/* Interactive Technical Badges */}
              <div className="absolute top-2 right-2 z-20 bg-[#D3FE89] text-[#131313] px-2.5 py-1 text-[10px] font-mono-code font-black tracking-widest uppercase shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#131313]" />
                CORDA TRANÇADA
              </div>

              <div className="absolute bottom-2 left-2 z-20 bg-[#131313] text-white px-2.5 py-1 text-[10px] font-mono-code font-bold tracking-widest uppercase shadow-md border border-neutral-700">
                TACTEL AMASSADINHO
              </div>
            </div>
          </div>

          {/* Right Anchor: Giant FIVE PANEL + Signature Script */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-center items-start lg:items-end text-left lg:text-right relative">
            <div className="relative inline-block">
              {/* FIVE PANEL stacked in bold condensed Signal Orange */}
              <h2 className="font-anton text-7xl sm:text-8xl md:text-9xl lg:text-[7.2rem] leading-[0.82] tracking-tighter text-[#EB450E] uppercase select-none">
                FIVE<br />PANEL
              </h2>

              {/* Overlaid Cursive Handwritten Signature */}
              <span className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-6 lg:-left-2 font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#131313] drop-shadow-sm select-none pointer-events-none transform -rotate-6 z-30 opacity-95">
                tactel series
              </span>
            </div>

            <p className="mt-10 font-mono-code text-[11px] tracking-[0.25em] text-[#504718] uppercase max-w-xs font-semibold">
              SIMPLES · MODERNO · CLEAN / CONFORTO & QUALIDADE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
