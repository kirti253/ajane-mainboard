"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/data/products";

type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addToCart: (product: Product, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const addToCart = (product: Product, size: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string, size: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const clear = () => setItems([]);

  const value: CartContextValue = {
    items,
    addToCart,
    updateQuantity,
    removeItem,
    clear,
    subtotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

