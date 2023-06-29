"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "@/app/context/user.context";
import { useRouter } from "next/navigation";

export default function UserContainer({ children }) {
  const { userChange } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [userChange]);

  return (
    <section className="bg-[#80808021] min-h-[70vh] flex flex-col">
      {children}
    </section>
  );
}
