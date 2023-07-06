export default async function patchCartFetch(pid, cookies, cid) {
  if (cookies.error) return cookies;

  const product = { pid, cid };

  try {
    const response = await fetch(
      "https://ecommerce-matias.vercel.app/api/patchcart",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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
