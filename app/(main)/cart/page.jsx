import { cookies } from "next/headers";
import CartInfo from "@/app/components/CartInfo";
import getCartToken from "@/app/utils/cartIdFetch";
import { Suspense } from "react";
import CartContainer from "@/app/containers/CartContainer";

export const fetchCache = "force-no-store";

async function getCart() {
  const tokenName = "cartId";
  const { payload } = await getCartToken(tokenName);

  if (!payload) return { data: { products: [] } };

  const cookieStore = cookies();
  const auth = cookieStore.get("authToken");
  const cid = payload._id;

  if (!auth) return { error: "no auth token" };
  const cookie = `${auth.name}=${auth.value}`;

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/carts/${cid}`,
      {
        next: { revalidate: 0 },
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${cookie};path=/;expires=Session`,
        },
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

export default async function Cart() {
  const { data, cookie } = await getCart();

  const { products, _id } = data;
  if (products.length === 0) return <div>Cart vacio</div>;
  const totalPrice = products.reduce(
    (acc, current) => acc + current.product.price * current.quantity,
    0
  );
  return (
    <CartContainer cookie={cookie} totalPrice={totalPrice} cid={_id}>
      <Suspense
        fallback={
          <div className="min-h-[70vh] w-full flex justify-center items-center">
            <p>Loading products...</p>
          </div>
        }
      >
        {products.map((product, index) => {
          return (
            <CartInfo key={index} product={product} cookie={cookie} cid={_id} />
          );
        })}
      </Suspense>
    </CartContainer>
  );
}
