import { CartItem, DiscountCode } from '../types/index.ts';

export const SHIPPING_THRESHOLD = 100;
export const STANDARD_SHIPPING_COST = 12;

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function calculateShipping(subtotal: number): number {
  if (subtotal === 0) return 0;
  return subtotal >= SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
}

export function calculateDiscount(subtotal: number, discount?: DiscountCode | null): number {
  if (!discount || subtotal <= 0) return 0;
  return Math.round((subtotal * (discount.percent / 100)) * 100) / 100;
}

export function calculateTotal(items: CartItem[], discount?: DiscountCode | null): number {
  const subtotal = calculateSubtotal(items);
  const discountAmount = calculateDiscount(subtotal, discount);
  const shipping = calculateShipping(subtotal - discountAmount);
  return Math.max(0, subtotal - discountAmount + shipping);
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
