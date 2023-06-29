import NavBarContainer from "@/app/containers/navBar.Container";
import { redirect } from "next/navigation";
import getToken from "@/app/utils/currentFetch";
import CartProvider from "@/app/context/cart.context";
import UserProvider from "@/app/context/user.context";

export default async function MainLayout({ children }) {
  const tokenName = "authToken";
  const token = await getToken(tokenName);
  if (token.error) {
    return (
      <h1>
        No tienes permisos para ver esta página, inicia sesion para ver el
        contenido
      </h1>
    );
  }
  if (!token.payload) redirect("/");
  return (
    <CartProvider>
      <UserProvider>
        <NavBarContainer />
        {children}
      </UserProvider>
    </CartProvider>
  );
}
