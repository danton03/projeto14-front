import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";
import Menu from "./Menu";

export default function CartPage() {
  const { setHomePage } = useContext(MenuContext);
  
  setTimeout(()=>setHomePage('carrinho'), 120);

  return(
    <>
      <h1>Página do Carrinho</h1>
      <Menu />
    </>
  );
}