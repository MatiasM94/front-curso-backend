import { NextResponse } from "next/server";

export async function PATCH(request) {
  const req = await request.json();

  const { pid, cid, quantity } = req;
  const tokenName = "authToken";
  const cookie = request.cookies.get(tokenName);

  const token = `${cookie.name}=${cookie.value}`;

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/carts/${cid}/product/${pid}`,
      {
        method: "PATCH",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${token};path=/;expires=Session`,
        },
        body: JSON.stringify({ quantity: quantity }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const res = NextResponse.json({ data });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
