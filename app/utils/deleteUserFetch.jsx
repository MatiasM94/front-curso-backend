export default async function deleteUserFetch(uid, cookies) {
  if (cookies.error) return cookies;

  try {
    const response = await fetch(
      `http://localhost:8000/api/deleteuser/${uid}`,
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
    console.log(data);
    return data;
  } catch (error) {
    return { error: error };
  }
}
