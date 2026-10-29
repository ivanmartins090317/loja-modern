import React, { useState } from 'react';
import { X, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw, Droplets, Wind } from 'lucide-react';
import { Product } from '../types/index.ts';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const images = [product.image, product.secondaryImage].filter(Boolean) as string[];

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div onClick={onClose} className="fixed inset-0 bg-neutral-950/80 backdrop-blur-xs" />

      <div className="relative w-full max-w-4xl bg-[#E9E6DE] shadow-2xl border border-[#131313]/30 z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-20 p-2 text-[#131313] hover:text-[#EB450E] bg-white/80 rounded-full cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images Gallery */}
        <div className="md:w-1/2 bg-white p-6 sm:p-8 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#131313]/15">
          <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={images[activeImageIndex] || product.image}
              alt={product.name}
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
            {product.badge && (
              <span className="absolute top-2 left-2 bg-[#EB450E] text-white text-[10px] font-mono-code font-bold px-2 py-0.5 uppercase tracking-widest shadow-xs">
                {product.badge}
              </span>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-14 border p-1 cursor-pointer transition-all ${
                    activeImageIndex === idx ? 'border-[#EB450E] scale-105' : 'border-neutral-300 opacity-60'
                  }`}
                >
                  <img src={img} alt="Visualização do boné" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-code text-xs font-bold tracking-[0.2em] text-[#EB450E] uppercase">
                / {product.code}
              </span>
              <span className="font-mono-code text-xs text-[#504718] font-bold uppercase">
                EM ESTOQUE · SANTOS - BR
              </span>
            </div>

            <h2 className="font-anton text-2xl sm:text-3xl text-[#131313] uppercase tracking-wide">
              {product.name}
            </h2>
            <p className="text-xs text-[#504718] uppercase tracking-wider font-mono-code mt-0.5 font-bold">
              {product.subtitle}
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-mono-code text-2xl font-bold text-[#131313]">
                R$ {product.price},00
              </span>
              {product.originalPrice && (
                <span className="font-mono-code text-sm text-neutral-400 line-through">
                  R$ {product.originalPrice},00
                </span>
              )}
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#131313]/90 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Colorway Indicator */}
            <div className="mt-6">
              <span className="text-[11px] font-mono-code font-bold uppercase text-[#131313] block mb-2">
                COR: <span className="text-[#EB450E]">{product.colorName}</span>
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-none border-2 border-[#131313] shadow-xs"
                  style={{ backgroundColor: product.colorHex }}
                />
                <span className="text-xs text-[#504718] font-mono-code">Paleta Oficial MODERN.SURF</span>
              </div>
            </div>

            {/* Specifications checklist */}
            <div className="mt-6 pt-4 border-t border-[#131313]/15">
              <span className="text-[11px] font-mono-code font-bold uppercase text-[#131313] block mb-2">
                ESPECIFICAÇÕES DO PRODUTO:
              </span>
              <ul className="space-y-1.5 text-xs text-[#131313]/80 font-medium">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#EB450E] shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quantity and Add to Bag */}
          <div className="pt-6 border-t border-[#131313]/15 space-y-4">
            <div className="flex gap-4">
              <div className="flex items-center border border-[#131313]/40 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-neutral-800 hover:bg-neutral-100 font-bold"
                >
                  -
                </button>
                <span className="px-3 font-mono-code text-xs font-bold text-[#131313]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-neutral-800 hover:bg-neutral-100 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-6 bg-[#EB450E] hover:bg-[#131313] text-white font-mono-code text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedNotice ? 'ADICIONADO À SACOLA!' : `ADICIONAR • R$ ${(product.price * quantity)},00`}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono-code text-[#504718] pt-2 border-t border-[#131313]/15 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#131313]" />
                <span>ENVIO EXPRESS</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-[#131313]" />
                <span>30 DIAS DE TROCA</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#131313]" />
                <span>AUTÊNTICO SANTOS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
