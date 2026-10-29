import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSubtotal,
  calculateShipping,
  calculateDiscount,
  calculateTotal,
  calculateItemCount,
  SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_COST,
} from './cart';
import { CartItem } from '../types';

const mockProductA = {
  id: 'prod-a',
  code: 'PROD-A',
  name: 'PRODUCT A - DAD CAP',
  subtitle: 'Classic 6-Panel Twill',
  price: 54,
  category: 'caps',
  colorName: 'Desert Sand',
  colorHex: '#cbb295',
  image: '/cap-a.png',
  description: 'Clean classic dad cap',
  specs: ['100% Cotton'],
  inStock: true,
};

const mockProductB = {
  id: 'prod-b',
  code: 'PROD-B',
  name: 'PRODUCT B - SIGNATURE BLUE',
  subtitle: 'Electric Cobalt Edition',
  price: 58,
  category: 'caps',
  colorName: 'Electric Blue',
  colorHex: '#0920e6',
  image: '/cap-b.png',
  description: 'Signature electric blue cap',
  specs: ['Embroidered logo'],
  inStock: true,
};

test('calculateSubtotal calculates correct sum of items', () => {
  const items: CartItem[] = [
    { product: mockProductA, quantity: 2 },
    { product: mockProductB, quantity: 1 },
  ];
  // 54 * 2 + 58 * 1 = 108 + 58 = 166
  assert.equal(calculateSubtotal(items), 166);
});

test('calculateItemCount sums total quantities', () => {
  const items: CartItem[] = [
    { product: mockProductA, quantity: 2 },
    { product: mockProductB, quantity: 3 },
  ];
  assert.equal(calculateItemCount(items), 5);
});

test('calculateShipping applies standard fee under threshold and free over threshold', () => {
  assert.equal(calculateShipping(0), 0);
  assert.equal(calculateShipping(54), STANDARD_SHIPPING_COST);
  assert.equal(calculateShipping(SHIPPING_THRESHOLD), 0);
  assert.equal(calculateShipping(150), 0);
});

test('calculateDiscount calculates percentage deduction correctly', () => {
  const discount = { code: 'SAVE10', percent: 10, description: '10% off' };
  assert.equal(calculateDiscount(100, discount), 10);
  assert.equal(calculateDiscount(100, null), 0);
});

test('calculateTotal correctly computes subtotal minus discount plus shipping', () => {
  const items: CartItem[] = [
    { product: mockProductA, quantity: 1 }, // 54
  ];
  // Subtotal 54. Shipping 12. Total = 66
  assert.equal(calculateTotal(items, null), 66);

  // Items: 54 * 2 = 108 (free shipping threshold >= 100)
  const bulkItems: CartItem[] = [
    { product: mockProductA, quantity: 2 },
  ];
  const discount = { code: 'VIP10', percent: 10, description: '10% off' };
  // Subtotal 108 - 10.8 = 97.2. Below 100 threshold, shipping 12 -> 109.2
  assert.equal(calculateTotal(bulkItems, discount), 109.2);
});
