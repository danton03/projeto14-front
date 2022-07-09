import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Topo } from "./styles/HeaderStyles";
import logo from "../assets/images/logo-header.svg";

export default function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  function renderizaHeader() {
    return(
      <>
        <div className="logo">
            <img src={logo} alt="logo da loja" />
            <h1>Sport Center</h1>
          </div>
        {user.length ?
          <button 
            type="button"
            disabled 
          >
            {user.name}
          </button>
        : 
          <button 
            type="button" 
            onClick={handleLogin} 
          >
            Login
          </button>
        }
      </>
    );
  }

  return(
    <Topo>
      {renderizaHeader()}
    </Topo>
  );
}