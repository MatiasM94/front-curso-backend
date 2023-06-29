import NavBarContainer from "../containers/navBar.Container";
import { redirect } from "next/navigation";
import getToken from "../utils/currentFetch";
import CartProvider from "../context/cart.context";
import UserProvider from "../context/user.context";

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
