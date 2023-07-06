export default async function deleteProductInCartFetch(pid, cookies, cid) {
  if (cookies.error) return cookies;

  try {
    const response = await fetch(
      `http://localhost:8000/api/deletecart/${cid}/${pid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
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
