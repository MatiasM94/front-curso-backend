import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { cid, pid } = params;

  const tokenName = "authToken";
  const cookie = request.cookies.get(tokenName);

  const token = `${cookie.name}=${cookie.value}`;

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/carts/${cid}/product/${pid}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${token};path=/;expires=Session`,
        },
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
