import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Product = { name: string; image: string; tag: string };

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      if (prev.find((p) => p.name === product.name)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prev) => prev.filter((p) => p.name !== productName));
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error('useCart must be used within a CartProvider');
  return context;
}