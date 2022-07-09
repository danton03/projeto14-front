import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./logIn_SingUp/LogIn";
import SingUp from "./logIn_SingUp/SingUp";
import Entrega from "./checkout/Entrega";
import Pagamento from "./checkout/Pagamento";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LogIn/>} />
          <Route path="singup" element={<SingUp/>} />
          <Route path="entrega" element={<Entrega/>} />
          <Route path="pagamento" element={<Pagamento/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
