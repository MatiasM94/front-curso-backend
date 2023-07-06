"use client";

import Link from "next/link";

export default function successfull() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center">
      <h2 className="mb-2">
        Gracias por realizar su compra en nuestra plataforma
      </h2>
      <Link
        href={"/products"}
        className="p-3 bg-purple-800 rounded-lg text-white"
      >
        Volver
      </Link>
    </section>
  );
}
