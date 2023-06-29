export default async function updateRoleFetch(uid, cookies) {
  if (cookies.error) return cookies;
  const token = cookies.cookie;
  try {
    console.log(uid);
    const response = await fetch(
      `http://localhost:3000/api/users/premium/${uid}`,
      {
        method: "PATCH",
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
