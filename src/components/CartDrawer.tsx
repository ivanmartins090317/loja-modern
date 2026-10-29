import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { CartItem, DiscountCode } from '../types/index.ts';
import {
  calculateSubtotal,
  calculateShipping,
  calculateDiscount,
  calculateTotal,
  SHIPPING_THRESHOLD,
} from '../utils/cart.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [discount, setDiscount] = useState<DiscountCode | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const discountAmount = calculateDiscount(subtotal, discount);
  const total = calculateTotal(items, discount);
  const freeShippingProgress = Math.min(100, (subtotal / 250) * 100);
  const amountToFreeShipping = Math.max(0, 250 - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCodeInput.trim().toUpperCase();
    if (code === 'MODERN10') {
      setDiscount({ code: 'MODERN10', percent: 10, description: '10% Desconto de Lançamento' });
      setPromoCodeInput('');
    } else if (code === 'SANTOS20') {
      setDiscount({ code: 'SANTOS20', percent: 20, description: '20% VIP Santos Surf' });
      setPromoCodeInput('');
    } else {
      setPromoError('Cupom inválido. Tente MODERN10 ou SANTOS20');
    }
  };

  const handleCheckoutWhatsApp = () => {
    setIsCheckingOut(true);
    const phone = '5513981400137';

    // Lista formatada dos itens com cores e quantidade
    const itemsText = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} (${item.product.colorName} / ${item.product.code}) - R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}`
      )
      .join('\n');

    let message = `🏄‍♂️ *NOVO PEDIDO - MODERN.SURF*\n\n`;
    message += `Olá! Montei minha sacola no site e gostaria de finalizar o pedido com você:\n\n`;
    message += `🛒 *ITENS DA SACOLA:*\n${itemsText}\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

    if (discount) {
      message += `🏷️ *Cupom (${discount.code}):* -R$ ${discountAmount.toFixed(2).replace('.', ',')}\n`;
    }

    message += `🚚 *Frete:* ${shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}\n`;
    message += `💰 *TOTAL A PAGAR: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Gostaria de combinar o envio e a chave PIX para pagamento! 🤙`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsCheckingOut(false);
      window.open(url, '_blank');
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#E9E6DE] h-full shadow-2xl flex flex-col z-10 border-l border-[#131313]/30">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#131313]/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#EB450E]" />
            <h3 className="font-anton text-xl tracking-wider text-[#131313] uppercase">
              SACOLA ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar sacola"
            className="p-1.5 text-neutral-500 hover:text-[#EB450E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-3 bg-[#131313]/5 border-b border-[#131313]/10 text-xs font-mono-code">
          {amountToFreeShipping > 0 ? (
            <p className="text-[#131313]">
              Faltam <span className="font-bold text-[#EB450E]">R$ {amountToFreeShipping.toFixed(2)}</span> para frete grátis.
            </p>
          ) : (
            <p className="font-bold text-[#EB450E] flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#EB450E]" /> FRETE GRÁTIS DESBLOQUEADO
            </p>
          )}
          <div className="w-full bg-neutral-300 h-1.5 mt-2 overflow-hidden rounded-full">
            <div
              className="bg-[#EB450E] h-full transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 py-12">
              <ShoppingBag className="w-12 h-12 stroke-[1] text-[#504718] mb-3" />
              <p className="font-oswald text-lg uppercase text-[#131313]">Sua sacola está vazia</p>
              <p className="text-xs text-[#504718] max-w-xs mt-1">
                Explore a linha Five Panel de Tactel da MODERN.SURF e garanta o seu.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#EB450E] text-white text-xs font-mono-code font-bold uppercase tracking-wider hover:bg-[#131313] transition-colors cursor-pointer"
              >
                VER BONÉS
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 bg-white border border-[#131313]/20 shadow-xs"
              >
                {/* Cap Thumbnail */}
                <div className="w-20 h-20 bg-[#E9E6DE] flex items-center justify-center overflow-hidden shrink-0 border border-neutral-300">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono-code text-[10px] text-[#504718] uppercase tracking-widest block font-bold">
                        {item.product.code}
                      </span>
                      <h4 className="font-oswald text-sm font-bold text-[#131313] uppercase leading-snug">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] text-neutral-600">
                        {item.product.colorName}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-neutral-400 hover:text-[#EB450E] transition-colors p-1"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-neutral-400">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-800 transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 font-mono-code text-xs font-bold text-[#131313]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-800 transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono-code text-xs font-bold text-[#131313]">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Summary */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#131313]/20 space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="CUPOM (Ex: MODERN10)"
                value={promoCodeInput}
                onChange={(e) => setPromoCodeInput(e.target.value)}
                className="flex-1 border border-neutral-300 px-3 py-1.5 text-xs font-mono-code uppercase focus:outline-none focus:border-[#EB450E]"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#131313] text-white text-xs font-mono-code font-bold uppercase hover:bg-[#EB450E] transition-colors cursor-pointer"
              >
                APLICAR
              </button>
            </form>
            {promoError && (
              <p className="text-[11px] text-red-600 font-mono-code">{promoError}</p>
            )}
            {discount && (
              <div className="flex justify-between items-center text-xs font-mono-code text-[#131313] bg-[#D3FE89]/40 px-2.5 py-1 border border-[#131313]">
                <span>{discount.description} ({discount.code})</span>
                <span>-R$ {discountAmount.toFixed(2)}</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 font-mono-code text-xs border-t border-neutral-200 pt-3">
              <div className="flex justify-between text-[#504718]">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#504718]">
                <span>Frete Estimado</span>
                <span>{shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2)}`}</span>
              </div>
              {discount && (
                <div className="flex justify-between text-[#EB450E] font-bold">
                  <span>Desconto</span>
                  <span>-R$ {discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#131313] border-t border-neutral-200 pt-2">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleCheckoutWhatsApp}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#131313] font-mono-code text-xs font-bold uppercase tracking-[0.12em] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.344 5.024L2 22l5.093-1.336A10.024 10.024 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.888 14.195c-.244.685-1.42 1.309-1.96 1.393-.518.08-1.189.117-3.415-.805-2.846-1.179-4.673-4.08-4.815-4.269-.138-.189-1.152-1.534-1.152-2.926 0-1.392.73-2.079.99-2.361.26-.282.569-.352.759-.352.19 0 .38.002.546.01.175.009.41-.067.641.487.244.585.83 2.028.903 2.176.073.148.122.321.024.515-.098.195-.147.316-.293.487-.146.17-.308.38-.44.51-.146.146-.299.306-.129.598.171.293.759 1.251 1.628 2.025 1.118.995 2.061 1.304 2.353 1.45.293.146.463.122.634-.073.17-.195.731-.853.926-1.145.195-.293.39-.244.658-.146.269.098 1.706.804 1.999.951.293.146.488.22.561.341.073.122.073.707-.171 1.392z" />
              </svg>
              <span>
                {isCheckingOut
                  ? 'ABRINDO WHATSAPP...'
                  : `FINALIZAR NO WHATSAPP (R$ ${total.toFixed(2).replace('.', ',')})`}
              </span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono-code text-[#504718] uppercase text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#131313] shrink-0" />
              <span>ATENDIMENTO DIRETO • PAGAMENTO VIA PIX • ENVIO SEGURO</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
