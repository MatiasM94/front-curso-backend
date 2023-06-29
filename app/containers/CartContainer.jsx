"use client";

import { useContext, useEffect } from "react";
import PurchaseButton from "@/app/components/PurchaseButton";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/cart.context";

export default function CartContainer({ children, totalPrice, cookie, cid }) {
  const { cartUpdate } = useContext(CartContext);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [cartUpdate]);
  return (
    <section className="bg-[#80808021] min-h-[70vh] flex flex-col">
      <div className="bg-white w-[80%] py-3 flex flex-col justify-around items-center mt-5 mx-auto rounded-lg shadow-[#30303040] shadow-[0px_2.88px_14.4px_2.88px]">
        {children}
        <div className="flex justify-end items-center h-[70px] w-[90%] border-b-2">
          <h3 className="font-semibold">Total</h3>
          <p className="font-semibold ml-5 w-[10%]">$ {totalPrice}</p>
        </div>
        <PurchaseButton cookie={cookie} totalPrice={totalPrice} cid={cid} />
      </div>
    </section>
  );
}
