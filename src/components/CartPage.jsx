import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";
import Menu from "./Menu";
import Header from "./Header"

export default function CartPage() {
  const { setHomePage } = useContext(MenuContext);
  
  setTimeout(()=>setHomePage('carrinho'), 120);

  return(
    <>
      <Header />
      <h1>Página do Carrinho</h1>
      <Menu />
    </>
  );
}