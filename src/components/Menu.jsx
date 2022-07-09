import { NavBar } from "./styles/HomePageStyles";
import home from "../assets/images/home.svg";
import homeAzul from "../assets/images/home-azul.svg";
import cart from "../assets/images/cart.svg";
import cartAzul from "../assets/images/cart-azul.svg";
import logout from "../assets/images/log-out.svg";
import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { homePage, setHomePage } = useContext(MenuContext);
  const navigate = useNavigate();

  function handleToHome() {
    if (!homePage) {
      setHomePage(true);
      navigate("/");
    }
  }

  function handleToCart() {
    if (homePage) {
      setHomePage(false);
      navigate("/carrinho");
    }
  }

  function renderizaMenu() {
    if (homePage) {
      return(
        <div className="icones">
          <div className="icone paginaAtual" onClick={handleToHome}>
            <img src={homeAzul} alt="ícone home" />
          </div>

          <div className="icone" onClick={handleToCart}>
            <img src={cart} alt="ícone carrinho" />
          </div>

          <div className="icone">
            <img src={logout} alt="ícone logout/login" />
          </div>
        </div>
      );
    }

    else{
      return(
        <div className="icones">
          <div className="icone" onClick={handleToHome}>
            <img src={home} alt="ícone home" />
          </div>

          <div className="icone paginaAtual" onClick={handleToCart}>
            <img src={cartAzul} alt="ícone carrinho" />
          </div>

          <div className="icone">
            <img src={logout} alt="ícone logout/login" />
          </div>
        </div>
      );
    }
  }

  return(
    <NavBar>
      {renderizaMenu()}
    </NavBar>
  );
}