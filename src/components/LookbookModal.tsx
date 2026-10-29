import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { LOOKBOOK_ITEMS, PRODUCTS } from '../data/products.ts';
import { Product } from '../types/index.ts';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div onClick={onClose} className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm" />

      <div className="relative w-full max-w-5xl bg-[#131313] text-white shadow-2xl border border-neutral-700 z-10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div>
            <span className="font-mono-code text-[11px] font-bold text-[#D3FE89] tracking-[0.25em] uppercase">
              MODERN.SURF · SANTOS - BR
            </span>
            <h3 className="font-anton text-2xl tracking-wide uppercase text-[#E9E6DE]">
              FIVE PANEL TACTEL · SÉRIE 2026
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar lookbook"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lookbook Gallery */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12">
          {LOOKBOOK_ITEMS.map((item, index) => {
            const product = PRODUCTS.find((p) => p.code === item.productFeatured) || PRODUCTS[0];
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-800 pb-12 last:border-b-0"
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-none border border-neutral-700 bg-[#E9E6DE] flex items-center justify-center p-4 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#131313]/90 px-3 py-1 font-mono-code text-[10px] tracking-widest uppercase text-[#D3FE89] border border-neutral-700">
                      {item.season}
                    </div>
                  </div>
                </div>

                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''} space-y-4`}>
                  <span className="font-mono-code text-xs font-bold text-[#EB450E] tracking-[0.2em] uppercase">
                    DROP 0{index + 1}
                  </span>
                  <h4 className="font-anton text-3xl sm:text-4xl text-white uppercase leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.subtitle}. Desenvolvido para máxima versatilidade: do mar à rotina urbana, com ajuste anatômico e corda náutica frontal.
                  </p>

                  <div className="p-4 bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono-code text-[#D3FE89] uppercase block font-bold">
                        PRODUTO:
                      </span>
                      <span className="font-oswald text-sm text-white uppercase font-bold">
                        {product.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(product);
                      }}
                      className="px-4 py-2 bg-[#EB450E] hover:bg-white hover:text-[#131313] text-white text-[11px] font-mono-code font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>COMPRAR PEÇA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
