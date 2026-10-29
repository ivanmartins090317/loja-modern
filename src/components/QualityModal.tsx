import React from 'react';
import { X, Droplets, Wind, ShieldCheck, Award, Scissors, Compass } from 'lucide-react';

interface QualityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
}

export const QualityModal: React.FC<QualityModalProps> = ({
  isOpen,
  onClose,
  onExploreProducts,
}) => {
  if (!isOpen) return null;

  const craftsmanshipPillars = [
    {
      icon: <Wind className="w-5 h-5 text-[#EB450E]" />,
      title: 'TACTEL CRINKLE ULTRA-LEVE (58 GRAMAS)',
      desc: 'Tecido 100% poliamida texturizada de toque enrugado. Quase imperceptível na cabeça, garantindo frescor e respiração sob sol intenso.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#EB450E]" />,
      title: 'ACABAMENTO HYDRO-REPELLENT & SECAGEM EXPRESS',
      desc: 'Repele respingos do mar e chuvas de verão. Seca completamente em minutos ao vento ou pendurado na quilha da prancha.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#EB450E]" />,
      title: 'CORDA NÁUTICA FRONTAL TRANÇADA',
      desc: 'Corda clássica de alta densidade aplicada no encontro da coroa com a aba, conferindo a icônica estética surf retro-contemporânea.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#EB450E]" />,
      title: 'FIVELA METÁLICA ANTI-OXIDAÇÃO',
      desc: 'Fita de poliamida com fivela deslizante em liga metálica fosca tratada contra a maresia e desgaste contínuo.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div onClick={onClose} className="fixed inset-0 bg-neutral-950/80 backdrop-blur-xs" />

      <div className="relative w-full max-w-3xl bg-[#E9E6DE] shadow-2xl border border-[#131313]/30 z-10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#131313]/20 flex items-center justify-between bg-white">
          <div>
            <span className="font-mono-code text-[11px] font-bold text-[#EB450E] tracking-[0.25em] uppercase">
              MODERN.SURF · SANTOS - BR
            </span>
            <h3 className="font-anton text-2xl tracking-wide uppercase text-[#131313]">
              / ENGENHARIA DO FIVE PANEL TACTEL
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal de qualidade"
            className="p-1.5 text-neutral-500 hover:text-[#EB450E] rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#131313]/90 leading-relaxed font-medium">
            O Boné Five Panel MODERN.SURF foi projetado a partir de uma necessidade real: um boné que suporte a umidade e a maresia sem perder a forma, que seja macio o suficiente para dobrar no bolso e bonito o bastante para usar em qualquer ocasião urbana.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {craftsmanshipPillars.map((pillar, i) => (
              <div key={i} className="p-4 bg-white border border-[#131313]/15 shadow-xs space-y-2">
                <div className="flex items-center gap-2.5">
                  {pillar.icon}
                  <h4 className="font-oswald text-sm font-bold text-[#131313] uppercase">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-[#504718] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#D3FE89]/30 border border-[#131313] flex items-center justify-between">
            <div>
              <span className="font-mono-code text-xs font-bold text-[#131313] block uppercase">
                GARANTIA VITALÍCIA DE COSTURA
              </span>
              <p className="text-xs text-[#504718] mt-0.5">
                Reforço de costura garantido contra descosturas para toda a vida útil do produto.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onExploreProducts();
              }}
              className="px-5 py-2.5 bg-[#EB450E] hover:bg-[#131313] text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ml-4 shadow-sm"
            >
              ESCOLHER COR
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
