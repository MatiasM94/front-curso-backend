"use server";

import { cookies } from "next/headers";

export async function getData(cid) {
  const cookieStore = cookies();
  const theme = cookieStore.get("authToken");

  if (!theme) return { error: "no auth token" };
  const cookie = `${theme.name}=${theme.value}`;
  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/carts/${cid}`,
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${cookie};path=/;expires=Session`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return { data, cookie };
  } catch (error) {
    return { error: error };
  }
}
