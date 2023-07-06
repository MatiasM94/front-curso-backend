export default async function updateProductInCartFetch(
  pid,
  cookies,
  cid,
  quantity
) {
  if (cookies.error) return cookies;

  const body = { quantity, cid, pid };

  try {
    const response = await fetch(
      "https://ecommerce-matias.vercel.app/api/updatecart",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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
