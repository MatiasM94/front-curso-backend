export default async function updateRoleFetch(uid, cookies) {
  if (cookies.error) return cookies;

  try {
    const response = await fetch(
      "https://ecommerce-matias.vercel.app/api/patchuser",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      }
    );

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
