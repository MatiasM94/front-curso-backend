export default async function postCartFetch(pid, cookies) {
  if (cookies.error) return cookies;

  const product = { pid };

  try {
    const response = await fetch(
      "https://ecommerce-matias.vercel.app/api/postcart",
      {
        method: "POST",
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
