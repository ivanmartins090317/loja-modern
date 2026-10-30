/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { TickerBanner } from './components/TickerBanner.tsx';
import { ProductLookbookGrid } from './components/ProductLookbookGrid.tsx';
import { BrandStoryBanner } from './components/BrandStoryBanner.tsx';
import { FeatureLooksSection } from './components/FeatureLooksSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { LookbookModal } from './components/LookbookModal.tsx';
import { QualityModal } from './components/QualityModal.tsx';
import { PRODUCTS } from './data/products.ts';
import { Product, CartItem } from './types/index.ts';
import { calculateItemCount } from './utils/cart.ts';
import { Check } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('modern_surf_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isQualityModalOpen, setIsQualityModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('modern_surf_cart', JSON.stringify(cartItems));
    } catch {
      // localStorage may be disabled
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Adicionado ${product.name} à sacola`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemCount = calculateItemCount(cartItems);

  return (
    <div className="min-h-screen bg-[#E9E6DE] text-[#131313] selection:bg-[#EB450E] selection:text-white flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#131313] text-white px-4 py-3 shadow-2xl border-2 border-[#EB450E] flex items-center gap-3 animate-fade-in font-mono-code text-xs font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#D3FE89] animate-ping" />
          <Check className="w-4 h-4 text-[#D3FE89]" />
          <span>{toastMessage}</span>
        </div>
      )}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{
              opacity: 0,
              transform: shouldReduceMotion
                ? 'none'
                : 'translateY(12px) scale(0.96)',
            }}
            animate={{
              opacity: 1,
              transform: shouldReduceMotion
                ? 'none'
                : 'translateY(0px) scale(1)',
              transition: {
                duration: shouldReduceMotion ? 0.14 : 0.22,
                ease: [0.23, 1, 0.32, 1], // --ease-out
              },
            }}
            exit={{
              opacity: 0,
              transform: shouldReduceMotion
                ? 'none'
                : 'translateY(8px) scale(0.98)',
              transition: {
                duration: shouldReduceMotion ? 0.12 : 0.18,
                ease: [0.77, 0, 0.175, 1], // --ease-in-out
              },
            }}
            className="fixed bottom-6 right-6 z-50 bg-[#131313] text-white px-4 py-3 shadow-2xl border-2 border-[#EB450E] flex items-center gap-3 font-mono-code text-xs font-bold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#D3FE89] animate-ping" />
            <Check className="w-4 h-4 text-[#D3FE89]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header Navigation */}
      <Header
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection
          onShopClick={() => handleNavigate('collection')}
        />

        {/* Marquee 1 */}
        <TickerBanner
          text="MODERN.SURF / FIVE PANEL TACTEL / CORDA TRANÇADA / SANTOS - BR / CONFORTO & QUALIDADE"
          textColor="text-[#EB450E]"
          borderColor="border-[#131313]/20"
        />

        {/* Product & Detail Grid (Adapted to MODERN.SURF) */}
        <ProductLookbookGrid
          products={PRODUCTS}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenProduct={(p) => setSelectedProduct(p)}
          onOpenLookbook={() => setIsLookbookOpen(true)}
          onOpenQualityModal={() => setIsQualityModalOpen(true)}
        />

        {/* Marquee 2 */}
        <TickerBanner
          text="TACTEL AMASSADINHO / PESO ULTRA-LEVE 58G / SECAGEM RÁPIDA / SIMPLES · MODERNO · CLEAN"
          textColor="text-[#504718]"
          borderColor="border-[#131313]/20"
          reverse
        />

        {/* Brand Story / Five Panel Tactel Presentation Banner */}
        <BrandStoryBanner
          onShopClick={() => handleNavigate('collection')}
        />

        {/* Feature Looks Section */}
        <FeatureLooksSection
          featuredProduct={PRODUCTS[0]}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <QualityModal
        isOpen={isQualityModalOpen}
        onClose={() => setIsQualityModalOpen(false)}
        onExploreProducts={() => handleNavigate('collection')}
      />
    </div>
  );
}
