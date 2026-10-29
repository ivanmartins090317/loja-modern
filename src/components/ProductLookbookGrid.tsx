import React from 'react';
import { ShoppingBag, ArrowUpRight, Eye, Sparkles, Shield, Droplets, Wind } from 'lucide-react';
import { Product } from '../types/index.ts';

interface ProductLookbookGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProduct: (product: Product) => void;
  onOpenLookbook: () => void;
  onOpenQualityModal: () => void;
}

export const ProductLookbookGrid: React.FC<ProductLookbookGridProps> = ({
  products,
  onAddToCart,
  onOpenProduct,
  onOpenLookbook,
  onOpenQualityModal,
}) => {
  return (
    <section id="collection" className="w-full bg-[#131313] p-2.5 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main 12-column grid layout with Modern Black gutters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          
          {/* Left Area (Top 3 Products + Bottom 2 Detail Cards) */}
          <div className="md:col-span-9 lg:col-span-10 flex flex-col gap-3 sm:gap-4">
            
            {/* Top Row: Product Cards (4 Products) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-[#E9E6DE] rounded-none p-4 sm:p-5 lg:p-3.5 xl:p-5 flex flex-col justify-between min-h-[380px] sm:min-h-[400px] xl:min-h-[420px] border border-neutral-700/40 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Card Header: / PRODUCT 01 */}
                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono-code text-xs sm:text-sm font-bold tracking-[0.2em] text-[#131313] uppercase">
                      / {product.code}
                    </span>
                    <span className="font-mono-code text-xs font-bold text-white bg-[#EB450E] px-2 py-0.5 shadow-xs">
                      R$ {product.price}
                    </span>
                  </div>

                  {/* Product Visual Area */}
                  <div 
                    onClick={() => onOpenProduct(product)}
                    className="relative my-4 flex-1 flex items-center justify-center cursor-pointer overflow-hidden group/img"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-44 h-44 sm:w-52 sm:h-52 lg:w-40 lg:h-40 xl:w-52 xl:h-52 object-contain filter contrast-105 drop-shadow-lg group-hover/img:scale-110 transition-transform duration-500"
                    />

                    {/* Quick view hover pill */}
                    <div className="absolute inset-0 bg-[#131313]/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="bg-[#131313] text-[#D3FE89] text-xs font-mono-code font-bold uppercase tracking-wider px-3.5 py-1.5 shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        VER DETALHES
                      </span>
                    </div>

                    {/* Tactel Material Badge */}
                    <span className="absolute bottom-1 left-1 bg-white/90 text-[9px] font-mono-code font-bold text-[#131313] px-2 py-0.5 border border-neutral-300">
                      TACTEL 58G
                    </span>
                  </div>

                  {/* Card Footer: Metadata + Signal Orange Square Cart Button */}
                  <div className="flex items-end justify-between pt-3 border-t border-[#131313]/15 z-10 gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 
                        onClick={() => onOpenProduct(product)}
                        className="font-oswald text-sm sm:text-base xl:text-lg font-bold text-[#131313] tracking-wide uppercase hover:text-[#EB450E] transition-colors cursor-pointer leading-tight line-clamp-2"
                      >
                        {product.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#504718] font-semibold mt-0.5 truncate">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Solid Signal Orange Square Cart Button */}
                    <button
                      onClick={() => onAddToCart(product)}
                      aria-label={`Adicionar ${product.name} à sacola`}
                      className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 bg-[#EB450E] hover:bg-[#131313] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md active:scale-95"
                    >
                      <ShoppingBag className="w-5 h-5 stroke-[2]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: / QUALITY and / LOOKBOOK */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
              
              {/* / QUALITY Card (Macro Texture + MODERN Patch + White Cord) */}
              <div 
                onClick={onOpenQualityModal}
                className="sm:col-span-5 bg-[#E9E6DE] p-5 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] border border-neutral-700/40 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between z-10">
                  <span className="font-mono-code text-xs sm:text-sm font-bold tracking-[0.2em] text-[#131313] uppercase">
                    / QUALIDADE & CONFORTO
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#EB450E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Macro Texture Crop of the tactel cap */}
                <div className="relative my-2 flex items-center gap-4">
                  <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-none border border-[#131313] overflow-hidden shrink-0 shadow-sm bg-neutral-900">
                    <img
                      src="/assets/crops/cap_detail_patch.png"
                      alt="Detalhe do Tecido Tactel Amassadinho com Corda Trançada e Patch MODERN"
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm sm:text-base font-bold text-[#131313] uppercase tracking-wide">
                      TACTEL CRINKLE + CORDA
                    </h4>
                    <p className="text-xs text-[#131313]/80 mt-1 leading-snug">
                      Textura enrugada de rápida evaporação e corda náutica frontal trançada.
                    </p>
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono-code font-bold text-[#EB450E] uppercase tracking-wider">
                      <Droplets className="w-3 h-3 text-[#EB450E]" />
                      HYDRO-REPELLENT
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono-code tracking-widest text-[#504718] uppercase flex items-center justify-between font-bold">
                  <span>INSPECIONAR DETALHES</span>
                  <span className="text-[#EB450E]">CLIQUE PARA VER</span>
                </div>
              </div>

              {/* / LOOKBOOK Card (Ajuste Técnico & Fecho Traseiro) */}
              <div 
                onClick={onOpenLookbook}
                className="sm:col-span-7 bg-[#1c1c1c] text-white p-5 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] border border-neutral-700 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
              >
                {/* Background Image of strap and eyelet */}
                <div className="absolute inset-0 flex">
                  <img
                    src="/assets/crops/bone_back_fexo.png"
                    alt="Fecho traseiro e fivela metálica"
                    className="w-1/2 h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity"
                  />
                  <img
                    src="/assets/crops/cap_eyelet.png"
                    alt="Ilhós bordado de respiração"
                    className="w-1/2 h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/40" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono-code text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D3FE89] uppercase drop-shadow-md">
                    / LOOKBOOK & SPECS
                  </span>
                  <div className="bg-[#EB450E] text-white px-2 py-0.5 text-[10px] font-mono-code font-bold tracking-widest uppercase">
                    ENGENHARIA
                  </div>
                </div>

                <div className="relative z-10 pt-16">
                  <span className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase block drop-shadow-md">
                    FECHO METÁLICO & ILHOSES
                  </span>
                  <p className="text-xs text-neutral-300 font-light mt-0.5 drop-shadow-xs">
                    Fita de nylon reforçada com fivela milimétrica de engate seguro.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono-code font-bold text-[#D3FE89] uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                    EXPLORAR LOOKBOOK <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Giant Vertical "MODERN.SURF Five Panel" Banner */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#131313] flex flex-col items-center justify-between p-4 border border-neutral-700 relative overflow-hidden min-h-[340px] md:min-h-full">
            {/* Subtle graphic background lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-between py-4">
              <div className="border-b border-[#D3FE89]" />
              <div className="border-b border-[#D3FE89]" />
              <div className="border-b border-[#D3FE89]" />
            </div>

            <span className="font-mono-code text-[10px] font-bold tracking-[0.3em] text-[#D3FE89] uppercase select-none">
              ESTD 2026
            </span>

            <div className="relative flex flex-col items-center justify-center my-auto py-6">
              {/* Vertical MODERN Text */}
              <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.8] text-[#E9E6DE] tracking-wider uppercase md:[writing-mode:vertical-rl] md:rotate-180 text-center select-none drop-shadow-md">
                MODERN
              </h2>

              {/* Overlaid Cursive Acid Lime Signature */}
              <span className="font-signature text-6xl sm:text-7xl md:text-8xl text-[#D3FE89] select-none pointer-events-none md:[writing-mode:vertical-rl] md:rotate-180 transform md:translate-x-3 drop-shadow-lg opacity-95">
                five panel
              </span>
            </div>

            <span className="font-mono-code text-[9px] font-bold tracking-[0.3em] text-[#EB450E] uppercase">
              SANTOS · BR
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
