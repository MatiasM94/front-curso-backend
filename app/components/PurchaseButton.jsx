"use client";

import purchaseFetch from "@/app/utils/purchaseFetch";

export default function PurchaseButton({ cookie, totalPrice, cid }) {
  const handlePurchase = async () => {
    const purchase = await purchaseFetch(cookie, totalPrice, cid);
  };
  return (
    <div className="flex justify-end items-center h-[70px] w-[90%]">
      <button
        onClick={handlePurchase}
        className="bg-purple-700 hover:md:bg-purple-800 text-gray-100 text-sm p-3 my-4 font-bold 40px rounded-md sm:font-semibold sm:leading-4 md:leading-[20px]"
      >
        Confirmar compra 😎
      </button>
    </div>
  );
}
