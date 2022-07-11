import { NavBar } from "./styles/MenuStyles";
import home from "../assets/images/home.svg";
import homeAzul from "../assets/images/home-azul.svg";
import cart from "../assets/images/cart.svg";
import cartAzul from "../assets/images/cart-azul.svg";
import logout from "../assets/images/log-out.svg";
import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function Menu() {
  const { homePage } = useContext(MenuContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleToHome() {
    if (homePage !== 'home') {
      navigate("/");
    }
  }

  function handleToCart() {
    if (homePage !== 'carrinho') {
      navigate("/carrinho");
    }
  }

  function renderizaMenu() {
    if (homePage === 'home') {
      return(
        <div className="icones">
          <div className="icone paginaAtual" onClick={handleToHome}>
            <img src={homeAzul} alt="ícone home" />
          </div>

          <div className="icone" onClick={handleToCart}>
            <img src={cart} alt="ícone carrinho" />
          </div>

          {user ?
            <div className="icone">
              <img src={logout} alt="ícone logout" />
            </div>
           : ''
          }
        </div>
      );
    }

    else if(homePage === 'carrinho'){
      return(
        <div className="icones">
          <div className="icone" onClick={handleToHome}>
            <img src={home} alt="ícone home" />
          </div>

          <div className="icone paginaAtual" onClick={handleToCart}>
            <img src={cartAzul} alt="ícone carrinho" />
          </div>

          {user ?
            <div className="icone">
              <img src={logout} alt="ícone logout" />
            </div>
           : ''
          }
        </div>
      );
    }
    
    else{
      return(
        <div className="icones">
          <div className="icone" onClick={handleToHome}>
            <img src={home} alt="ícone home" />
          </div>

          <div className="icone" onClick={handleToCart}>
            <img src={cart} alt="ícone carrinho" />
          </div>

          {user ?
            <div className="icone">
              <img src={logout} alt="ícone logout/login" />
            </div>
           : ''
          }
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