import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LogIn from "./logIn_SingUp/LogIn";
import HomePage from "./components/HomePage";
import SingUp from "./logIn_SingUp/SingUp";
import Entrega from "./checkout/Entrega";
import Pagamento from "./checkout/Pagamento";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user , setUser] = useState({});
  return (
    <UserContext.Provider value={{user, setUser}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/singup" element={<SingUp/>} />
          <Route path="/entrega" element={<Entrega/>} />
          <Route path="/pagamento" element={<Pagamento/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
