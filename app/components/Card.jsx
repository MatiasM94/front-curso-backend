"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card({ products }) {
  const { title, thumbnails, _id, price } = products;
  const config = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  };
  return (
    <Link
      href={`/products/${_id}`}
      className="text-center w-[200px] h-[300px] mx-5 my-3 bg-white p-2.5 hover:md:shadow-[#30303040] hover:md:shadow-[0px_2.88px_14.4px_2.88px]"
    >
      <div className="h-[150px] flex justify-center items-center rounded-t-lg border-[grey]">
        <Image src={thumbnails[1]} width={150} height={150} />
      </div>
      <div className="border-[grey]">
        <h3>{price.toLocaleString("es-AR", config)}</h3>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
