import ProductDetail from "@/app/containers/productDetail.Container";
import { cookies } from "next/headers";

async function getProduct(params) {
  const cookieStore = cookies();
  const theme = cookieStore.get("authToken");

  if (!theme) return { error: "no auth token" };
  const cookie = `${theme.name}=${theme.value}`;
  const { _id } = params;
  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/products/${_id}`,
      {
        method: "GET",
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
    return data;
  } catch (error) {
    return { error: error };
  }
}

export default async function ({ params }) {
  const data = await getProduct(params);
  return <ProductDetail productDetail={data} />;
}
