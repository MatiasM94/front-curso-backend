export default async function deleteProductInCartFetch(pid, cookies, cid) {
  if (cookies.error) return cookies;
  const token = cookies.cookie;

  try {
    const response = await fetch(
      `https://ecommerce-matias.up.railway.app/${cid}/product/${pid}`,
      {
        method: "DELETE",
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
    return data;
  } catch (error) {
    return { error: error };
  }
}
