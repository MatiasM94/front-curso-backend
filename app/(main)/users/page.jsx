import UserInfo from "@/app/components/UserInfo";
import UserContainer from "@/app/containers/UserContainer";
import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();
  const theme = cookieStore.get("authToken");

  if (!theme) return { error: "no auth token" };
  const cookie = `${theme.name}=${theme.value}`;
  try {
    const response = await fetch(`http://localhost:3000/api/users`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${cookie};path=/;expires=Session`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}

export default async function Users() {
  try {
    const data = await getData();
    if (data.error) return <h1>Lo siento, ocurrio un error inesperado</h1>;
    return (
      <UserContainer>
        <div className="grid grid-cols-5 w-[80%] mx-auto text-center">
          <h3>nombre</h3>
          <h3>apellido</h3>
          <h3>email</h3>
          <h3>rol</h3>
          <h3>options</h3>
        </div>

        {data.users.map((user, index) => (
          <UserInfo key={index} user={user} />
        ))}
      </UserContainer>
    );
  } catch (error) {
    return <h1>Lo siento, ocurrio un error inesperado</h1>;
  }
}
