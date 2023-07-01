export default async function deleteUserFetch(uid, cookies) {
  if (cookies.error) return cookies;
  const token = cookies;
  console.log(token);
  try {
    const response = await fetch(`http://localhost:3000/api/users/${uid}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${token};path=/;expires=Session`,
      },
    });
    console.log(response);
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
