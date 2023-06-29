"use client";

import { useContext, useState } from "react";
import updateProductInCartFetch from "@/app/utils/updateProductInCartFetch";
import { CartContext } from "@/app/context/cart.context";

export default function QuantityButtons({ product, cookie, cid }) {
  const { cartUpdate, setCartUpdate } = useContext(CartContext);
  const [valueInput, setValueInput] = useState(Number(product.quantity));

  const handlerQuantity = (e) => {
    const { value, min, max } = e.target;

    if (+min <= +value && +value <= +max) {
      setValueInput(Number(value));
    }
  };

  const handleIncrement = async () => {
    if (product.product.stock >= valueInput) {
      const pid = product.product._id;
      const updateCart = await updateProductInCartFetch(
        pid,
        cookie,
        cid,
        valueInput + 1
      );
      setValueInput(valueInput + 1);
      setCartUpdate(cartUpdate + 1);
    }
  };

  const handleDecrease = async () => {
    if (valueInput > 1) {
      const pid = product.product._id;
      const updateCart = await updateProductInCartFetch(
        pid,
        cookie,
        cid,
        valueInput - 1
      );
      setValueInput(valueInput - 1);
      setCartUpdate(cartUpdate - 1);
    }
  };

  const handleSubmit = async (e) => {
    const { value, max } = e.target;
    if (1 <= +value && +value <= +max) {
      const pid = product.product._id;
      const updateCart = await updateProductInCartFetch(
        pid,
        cookie,
        cid,
        value
      );
      setCartUpdate(cartUpdate + value);
    }
  };
  return (
    <div className="flex items-center justify-around w-full py-1 border-solid border-2 rounded-lg mb-1">
      <button onClick={handleDecrease} className="text-purple-600 text-xl">
        -
      </button>
      <input
        type="number"
        min={0}
        max={product.product.stock}
        onChange={handlerQuantity}
        value={valueInput}
        onBlur={handleSubmit}
        className="inputNumber mx-2 w-[20px] text-center"
        placeholder={product.quantity}
      />
      <button onClick={handleIncrement} className="text-purple-600 text-xl">
        +
      </button>
    </div>
  );
}
