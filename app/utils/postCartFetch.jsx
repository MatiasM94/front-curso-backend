export default async function postCartFetch(pid, cookies) {
  if (cookies.error) return cookies;
  const token = cookies.cookie;
  const product = { pid: pid };

  try {
    const response = await fetch(
      "https://ecommerce-matias.up.railway.app/api/carts/",
      {
        method: "POST",
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

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}
