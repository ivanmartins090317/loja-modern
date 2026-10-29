import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Waves } from 'lucide-react';
import { ModernSurfLogo } from './ModernSurfLogo.tsx';

interface BrandStoryBannerProps {
  onShopClick: () => void;
}

export const BrandStoryBanner: React.FC<BrandStoryBannerProps> = ({ onShopClick }) => {
  return (
    <section id="brand-story" className="relative w-full overflow-hidden bg-[#E9E6DE] py-12 sm:py-16 border-b border-[#131313]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Container Box */}
        <div className="relative bg-[#ded9ce] border border-[#131313]/25 shadow-xl overflow-hidden p-6 sm:p-10 md:p-14">
          
          {/* Subtle wave / surf line watermark */}
          <div className="absolute top-4 right-6 opacity-10 pointer-events-none">
            <Waves className="w-48 h-48 text-[#131313]" />
          </div>

          {/* Top Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-[#131313]/20 gap-4">
            <div>
              <span className="font-mono-code text-[11px] font-bold tracking-[0.25em] text-[#EB450E] uppercase block mb-1">
                ENGENHARIA DO PRODUTO · TACTEL CRINKLE
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-[#131313]">
                BONÉ FIVE PANEL DE TACTEL
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <ModernSurfLogo variant="orbital-orange" size="md" />
              <div className="text-right">
                <span className="font-mono-code text-[10px] font-bold text-[#131313] block">
                  ORIGEM: SANTOS - BR
                </span>
                <span className="font-mono-code text-[9px] text-[#504718]">
                  ESTD 2026 · ATELIER
                </span>
              </div>
            </div>
          </div>

          {/* Center Stage: Split between Product Stories and Central Cap Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-8">
            
            {/* Left Story Card */}
            <div className="md:col-span-4 bg-[#E9E6DE]/90 backdrop-blur-xs p-5 sm:p-6 border border-[#131313]/15 shadow-sm space-y-3">
              <span className="font-mono-code text-[10px] font-bold text-[#EB450E] uppercase tracking-wider block">
                01 / CONFORTO TÉRMICO
              </span>
              <h3 className="font-anton text-xl sm:text-2xl text-[#131313] uppercase">
                LEVEZA & SECAGEM RÁPIDA
              </h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#131313]/85 font-medium">
                Desenvolvido para encarar o salitre e o calor úmido de Santos. O tecido tactel amassadinho não esquenta a cabeça, seca em poucos minutos e pesa somente 58 gramas.
              </p>
              <ul className="text-xs text-[#504718] font-mono-code space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EB450E]" />
                  <span>Tecido 100% poliamida hydro-repelente</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EB450E]" />
                  <span>Corda náutica frontal trançada</span>
                </li>
              </ul>
            </div>

            {/* Center Cap Presentation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center my-4 md:my-0">
              <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center">
                <img
                  src="/assets/crops/bone-five-ancora.png"
                  alt="Boné Five Panel Tactel MODERN.SURF"
                  className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="mt-2 font-mono-code text-[11px] font-bold tracking-widest text-[#131313] uppercase bg-[#D3FE89] px-3 py-0.5">
                PADRÃO FIVE PANEL · 58G
              </span>
            </div>

            {/* Right Story Card */}
            <div className="md:col-span-4 bg-[#E9E6DE]/90 backdrop-blur-xs p-5 sm:p-6 border border-[#131313]/15 shadow-sm space-y-3">
              <span className="font-mono-code text-[10px] font-bold text-[#EB450E] uppercase tracking-wider block">
                02 / ACABAMENTO & QUALIDADE
              </span>
              <h3 className="font-anton text-xl sm:text-2xl text-[#131313] uppercase">
                DURABILIDADE SUPERIOR
              </h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#131313]/85 font-medium">
                Aba flexível anatômica com memória de retorno que pode ser dobrada para caber no bolso. Costuras reforçadas e fivela metálica que resiste à oxidação da maresia.
              </p>
              <ul className="text-xs text-[#504718] font-mono-code space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EB450E]" />
                  <span>Fecho traseiro em metal fosco anti-ferrugem</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EB450E]" />
                  <span>Patch selado emborrachado MODERN</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#131313]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#504718]">
              <ShieldCheck className="w-4 h-4 text-[#EB450E]" />
              <span>GARANTIA DE QUALIDADE MODERN.SURF SANTOS</span>
            </div>

            <button
              onClick={onShopClick}
              className="px-8 py-3 bg-[#EB450E] hover:bg-[#131313] text-white transition-all duration-300 font-bold tracking-[0.25em] text-xs uppercase flex items-center gap-2.5 cursor-pointer shadow-lg hover:scale-105"
            >
              <span>GARANTIR MEU FIVE PANEL</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
