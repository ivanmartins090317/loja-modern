import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types/index.ts';
import { COLORWAYS_LIST } from '../data/products.ts';

interface FeatureLooksSectionProps {
  onSelectProduct: (product: Product) => void;
  featuredProduct: Product;
}

export const FeatureLooksSection: React.FC<FeatureLooksSectionProps> = ({
  onSelectProduct,
  featuredProduct,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const activeColor = COLORWAYS_LIST[selectedColorIndex];

  return (
    <section className="w-full bg-[#E9E6DE] py-12 px-4 sm:px-8 border-b border-[#131313]/15">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Feature Container Card matching prototype */}
        <div className="relative bg-[#ded9ce] border border-[#131313]/25 px-6 sm:px-12 py-10 md:py-14 overflow-hidden shadow-lg">
          
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#13131308_1px,transparent_1px),linear-gradient(to_bottom,#13131308_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Typography + Stage */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[340px] md:min-h-[400px]">
            
            {/* Left: FEATURE + cursive "Five Panel Tactel" */}
            <div className="relative text-center md:text-left z-20 mb-6 md:mb-0">
              <span className="font-mono-code text-[11px] font-bold tracking-[0.25em] text-[#504718] uppercase block mb-1">
                CORES MODERN.SURF
              </span>
              <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-[#EB450E] tracking-tight uppercase select-none">
                FEATURE
              </h2>
              {/* Handwritten Cursive Script Subtitle */}
              <div className="font-signature text-4xl sm:text-5xl md:text-6xl text-[#131313] -mt-2 sm:-mt-4 md:ml-4 -rotate-6 select-none">
                Five Panel Tactel
              </div>
            </div>

            {/* Center: Model & Cap Display with Color Swatches */}
            <div className="relative my-4 md:my-0 flex flex-col justify-center items-center z-10">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-square flex items-center justify-center p-4">
                <motion.img
                  key={activeColor.name}
                  src={activeColor.image}
                  alt={`Boné Five Panel MODERN.SURF na cor ${activeColor.name}`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Colorway Switcher Buttons */}
              <div className="flex items-center gap-2.5 mt-2 bg-white/80 backdrop-blur-xs p-2 border border-[#131313]/20 shadow-sm">
                {COLORWAYS_LIST.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    title={color.name}
                    className={`w-7 h-7 rounded-none border-2 transition-all cursor-pointer flex items-center justify-center ${
                      selectedColorIndex === idx
                        ? 'border-[#EB450E] scale-110 shadow-md ring-2 ring-[#EB450E]/30'
                        : 'border-[#131313]/40 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColorIndex === idx && (
                      <Check className={`w-3.5 h-3.5 ${color.hex === '#131313' ? 'text-white' : 'text-[#131313]'}`} />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-[10px] font-mono-code font-bold uppercase text-[#131313] mt-2">
                COR: <span className="text-[#EB450E]">{activeColor.name}</span> ({activeColor.label})
              </span>
            </div>

            {/* Right: SERIES / LOOKS */}
            <div className="relative text-center md:text-right z-20 mt-6 md:mt-0">
              <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-[#EB450E] tracking-tight uppercase select-none">
                LOOKS
              </h2>
              <button
                onClick={() => {
                  onSelectProduct({
                    ...featuredProduct,
                    name: `FIVE PANEL TACTEL ${activeColor.label}`,
                    colorName: activeColor.name,
                    colorHex: activeColor.hex,
                    image: activeColor.image,
                  });
                }}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#131313] hover:bg-[#EB450E] text-white text-xs font-mono-code font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer shadow-md"
              >
                <span>COMPRAR {activeColor.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Bottom metadata strip */}
          <div className="relative z-10 mt-8 pt-5 border-t border-[#131313]/20 flex flex-wrap items-center justify-between text-[11px] font-mono-code text-[#504718] uppercase tracking-widest gap-2 font-bold">
            <span>TACTEL HYDRO-REPELLENT 58G</span>
            <span>CORDA NÁUTICA TRANÇADA</span>
            {/* <span>ENVIOS PARA TODO O BRASIL</span> */}
          </div>

        </div>
      </div>
    </section>
  );
};
