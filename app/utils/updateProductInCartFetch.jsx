export default async function updateProductInCartFetch(
  pid,
  cookies,
  cid,
  quantity
) {
  if (cookies.error) return cookies;
  const token = cookies.cookie;
  const body = { quantity: quantity };

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/api/carts/${cid}/product/${pid}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${token};path=/;expires=Session`,
        },
        body: JSON.stringify(body),
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
