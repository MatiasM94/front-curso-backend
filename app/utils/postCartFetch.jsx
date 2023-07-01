export default async function postCartFetch(pid, cookies) {
  if (cookies.error) return cookies;

  const token = cookies.cookie;

  const product = { pid };

  try {
    const response = await fetch("http://localhost:3000/api/carts/", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${token};path=/;expires=Session`,
      },
      body: JSON.stringify(product),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}
