export interface Product {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: string;
  colorName: string;
  colorHex: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  description: string;
  specs: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface DiscountCode {
  code: string;
  percent: number;
  description: string;
}
