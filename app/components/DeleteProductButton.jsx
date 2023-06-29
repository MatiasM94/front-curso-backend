"use client";

import { useContext } from "react";
import deleteProductInCartFetch from "../utils/deleteProductIncartFetch";
import { CartContext } from "../context/cart.context";

export default function DeleteProductButton({ pid, cookie, cid }) {
  const { cartUpdate, setCartUpdate } = useContext(CartContext);
  const handleDelete = async () => {
    const deleteProduct = await deleteProductInCartFetch(pid, cookie, cid);
    setCartUpdate(cartUpdate + 1);
  };
  return (
    <button onClick={handleDelete} className="text-purple-500 ml-2">
      Eliminar
    </button>
  );
}
