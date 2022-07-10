import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LogIn from "./logIn_SingUp/LogIn";
import HomePage from "./components/HomePage";
import SingUp from "./logIn_SingUp/SingUp";
import Entrega from "./checkout/Entrega";
import Pagamento from "./checkout/Pagamento";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import MenuContext from "./contexts/MenuContext";
import CartPage from "./components/CartPage";
import SendContext from "./contexts/SendContext";

function App() {
  const [user , setUser] = useState({});
  const [homePage , setHomePage] = useState(true);
  const [dataSend, setDataSend] = useState({})
  return (
    <UserContext.Provider value={{user , setUser}} >
      <MenuContext.Provider value={{homePage , setHomePage}}>
        <SendContext.Provider value={{dataSend, setDataSend}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/singup" element={<SingUp/>} />
              <Route path="/carrinho" element={<CartPage/>} />
              <Route path="/entrega" element={<Entrega/>} />
              <Route path="/pagamento" element={<Pagamento/>} />
            </Routes>
          </BrowserRouter>
       </SendContext.Provider>
      </MenuContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
