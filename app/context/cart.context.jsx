"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState("");
  const [cartUpdate, setCartUpdate] = useState(0);
  return (
    <CartContext.Provider value={{ cart, setCart, cartUpdate, setCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
