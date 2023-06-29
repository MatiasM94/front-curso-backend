"use client";

import Image from "next/image";
import QuantityButtons from "./QuantityButtons";
import DeleteProductButton from "./DeleteProductButton";

export default async function CartInfo({ product, cookie, cid }) {
  return (
    <>
      <div className="flex justify-between w-[90%] h-[150px] border-b-2">
        <div className="flex items-center w-[500px]">
          <Image src={product.product.thumbnails[0]} width={70} height={70} />
          <div>
            <h3 className="ml-2 mb-2">{product.product.title}</h3>
            <DeleteProductButton
              pid={product.product._id}
              cookie={cookie}
              cid={cid}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[12%]">
          <QuantityButtons product={product} cookie={cookie} cid={cid} />
          <p className="text-sm">{product.product.stock} disponibles</p>
        </div>
        <div className="flex items-center w-[10%]">
          <p className="font-semibold">
            $ {product.product.price * product.quantity}
          </p>
        </div>
      </div>
    </>
  );
}
