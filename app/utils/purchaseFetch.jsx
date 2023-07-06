export default async function purchaseFetch(cookies, totalPrice, cid) {
  if (cookies.error) return cookies;
  const body = { priceFinally: totalPrice, cid };

  try {
    const response = await fetch("http://localhost:8000/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: error };
  }
}
