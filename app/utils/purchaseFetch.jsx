export default async function purchaseFetch(cookies, totalPrice, cid) {
  if (cookies.error) return cookies;
  const token = cookies.cookie;
  const body = { priceFinally: totalPrice };

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/${cid}/purchase`,
      {
        method: "POST",
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
