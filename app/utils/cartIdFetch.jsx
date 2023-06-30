const { cookies } = require("next/headers");

export default async function getCartToken(tokenName) {
  const cookieStore = cookies();
  const theme = cookieStore.get(tokenName);

  if (!theme) return { error: "no auth token" };
  const cookie = `${theme.name}=${theme.value}`;

  try {
    const response = await fetch(
      "https://ecommerce-matias.up.railway.app/api/auth/current",
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${cookie};path=/;expires=Session`,
        },
        cache: "no-store",
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
