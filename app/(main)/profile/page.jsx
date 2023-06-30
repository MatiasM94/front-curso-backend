import getCookies from "@/app/utils/getCookies";
import ProfileInfo from "@/app/components/profile";

export async function getProfile() {
  const tokenName = "authToken";
  const { cookie, error } = getCookies(tokenName);

  if (error) return error;

  const response = await fetch(
    "https://ecommerce-matias.up.railway.app/api/auth/current",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${cookie};path=/;expires=Session`,
      },
      next: { revalidate: 600 },
    }
  );

  const data = await response.json();
  return { data };
}

export default async function Profile() {
  const { data } = await getProfile();
  return <ProfileInfo payload={data.payload} />;
}
