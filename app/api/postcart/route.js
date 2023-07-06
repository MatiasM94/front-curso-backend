import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();

  const product = req;
  const tokenName = "authToken";
  const cookie = request.cookies.get(tokenName);

  const token = `${cookie.name}=${cookie.value}`;

  try {
    const response = await fetch(
      "https://ecommerce-matias.up.railway.app/api/carts",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${token};path=/;expires=Session`,
        },
        body: JSON.stringify(product),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const head = response.headers.get("set-cookie");

    const data = await response.json();

    const firstEqualSignIndex = head.indexOf("=");
    const secondIndex = head.indexOf(";");
    const value = head.substring(firstEqualSignIndex + 1, secondIndex);

    const res = NextResponse.json({ data });
    res.cookies.set("cartId", value);

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
