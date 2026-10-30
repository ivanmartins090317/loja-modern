import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ModernSurfLogo } from './ModernSurfLogo.tsx';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 bg-[#E9E6DE]/95 backdrop-blur-md border-b border-[#131313]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-[12px] font-bold tracking-[0.25em] text-[#131313] uppercase">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            INÍCIO
          </button>
          <button
            onClick={() => onNavigate('collection')}
            className="hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            FIVE PANEL
          </button>
          <button
            onClick={() => onNavigate('quality')}
            className="hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            QUALIDADE
          </button>
          <button
            onClick={() => onNavigate('brand-story')}
            className="hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            SOBRE
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#131313] hover:text-[#EB450E]"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center Official MODERN.SURF Logo Badge */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex flex-col items-center justify-center cursor-pointer group"
        >
          <ModernSurfLogo variant="orbital-orange" size="md" />
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-mono-code font-bold tracking-[0.3em] text-[#131313] uppercase">
              MODERN.SURF
            </span>
            <span className="text-[8px] font-mono-code text-[#504718] hidden sm:inline">
              · SANTOS - BR
            </span>
          </div>
        </div>

        {/* Right Navigation & Cart */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-[12px] font-bold tracking-[0.25em] text-[#131313] uppercase">
          <button
            onClick={() => onNavigate('footer')}
            className="hidden md:inline-block hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            CONTATO
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label={`Abrir sacola com ${cartCount} itens`}
            className="relative p-2 text-[#131313] hover:text-[#EB450E] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ transform: shouldReduceMotion ? 'none' : 'scale(1.22)' }}
                animate={{ transform: shouldReduceMotion ? 'none' : 'scale(1)' }}
                transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -top-1 -right-1 bg-[#EB450E] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center font-mono-code"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              transform: shouldReduceMotion ? 'none' : 'translateY(-8px)',
              opacity: 0,
            }}
            animate={{
              transform: shouldReduceMotion ? 'none' : 'translateY(0px)',
              opacity: 1,
              transition: {
                duration: shouldReduceMotion ? 0.12 : 0.19,
                ease: [0.23, 1, 0.32, 1], // --ease-out
              },
            }}
            exit={{
              transform: shouldReduceMotion ? 'none' : 'translateY(-8px)',
              opacity: 0,
              transition: {
                duration: shouldReduceMotion ? 0.10 : 0.15,
                ease: [0.23, 1, 0.32, 1],
              },
            }}
            className="md:hidden bg-[#E9E6DE] border-b border-[#131313]/20 px-6 py-5 space-y-4 font-bold tracking-[0.2em] text-xs uppercase"
          >
            <button
              onClick={() => { onNavigate('hero'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-[#EB450E]"
            >
              INÍCIO
            </button>
            <button
              onClick={() => { onNavigate('collection'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-[#EB450E]"
            >
              FIVE PANEL TACTEL
            </button>
            <button
              onClick={() => { onNavigate('quality'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-[#EB450E]"
            >
              QUALIDADE & DETALHES
            </button>
            <button
              onClick={() => { onNavigate('brand-story'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-[#EB450E]"
            >
              SOBRE A MARCA
            </button>
            <button
              onClick={() => { onNavigate('footer'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 hover:text-[#EB450E]"
            >
              CONTATO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
