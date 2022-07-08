import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./logIn_SingUp/LogIn";
import SingUp from "./logIn_SingUp/SingUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LogIn/>} />
          <Route path="singup" element={<SingUp/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
