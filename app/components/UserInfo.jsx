import { cookies } from "next/headers";
import UserButtons from "./userButtons";

export default function UserInfo({ user }) {
  const cookieStore = cookies();
  const auth = cookieStore.get("authToken");

  if (!auth) return { error: "no auth token" };
  const cookie = `${auth.name}=${auth.value}`;
  return (
    <div className="grid grid-cols-5 w-[80%] mx-auto text-center">
      <p>{user.nombre}</p>
      <p>{user.apellido}</p>
      <p>{user.email}</p>
      <p>{user.rol}</p>
      <UserButtons userDelete={user.nombre} uid={user.id} cookie={cookie} />
    </div>
  );
}
