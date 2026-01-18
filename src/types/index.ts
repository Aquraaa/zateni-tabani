export type Category = 'perepechis' | 'tabanis' | 'pizza' | 'drinks';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  weight: string;
  description?: string;
  image?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  status: 'pending' | 'preparing' | 'shipping' | 'delivered';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  addresses?: string[];
}
