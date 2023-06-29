"use client";

import { useRouter } from "next/navigation";
import postCartFetch from "../utils/postCartFetch";
import patchCartFetch from "../utils/patchCartFetch";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

export default function BuyButtons({ cookies, pid }) {
  const router = useRouter();
  const { cart, setCart, cartUpdate, setCartUpdate } = useContext(CartContext);
  const addToCart = async (cookie, pid) => {
    if (cart) {
      const addProduct = await patchCartFetch(pid, cookie, cart);
      setCartUpdate(cartUpdate + 1);

      router.push(`/cart`);
      return;
    }
    const addProduct = await postCartFetch(pid, cookie);

    const { _id } = addProduct.cartAdded;
    setCart(_id);

    router.push(`/cart`);
  };
  return (
    <div className="flex flex-col">
      <button className="bg-purple-700 text-gray-100 text-sm py-2 my-2 w-[30%] font-bold 40px rounded-xl sm:font-semibold sm:leading-4 md:leading-[20px] hover:md:bg-purple-800">
        Comprar ahora
      </button>
      <button
        onClick={() => addToCart(cookies, pid)}
        className="bg-[#F2E001] hover:md:bg-[#d8ce49] text-white text-sm py-2 w-[30%] font-bold 40px rounded-xl sm:font-semibold sm:leading-4 md:leading-[20px]"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
