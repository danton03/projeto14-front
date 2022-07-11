import FormsLogInSingUp from "./FormsLogInSingUp"
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import MenuContext from "../contexts/MenuContext";
import { toast } from "react-toastify";


export default function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { homePage } = useContext(MenuContext);

  const { user, setUser } = useContext(UserContext);

  let navigate = useNavigate()

function logar(event) {
    event.preventDefault();
    const body = { email, password };
    console.log(body)
    
      const request = axios.post('http://localhost:5000/login', body);
      request.then((res)=>{
        const token = res.data
  
        setUser(token);
  
  
        navigate(homePage);
      })

      toast.promise(
        request,
        {
          pending: 'Carregando...',
          success: 'Login realizado com sucesso!',
          error: {
            render({ data }) {
              const code = data.response.status;
              if (code === 401 || code === 422) {
                const message = data.response.data;
                return message;
              }
              else {
                return "Ops, tivemos uma falha interna";
              }
            }
          }
        }
      );
    request.catch(
      (error) => {
        console.log(error.response.data);
      }  
    ) 
}


  return (


    <FormsLogInSingUp
      logar={logar}
      TextButton={"Entrar"}
      email={email} setEmail={setEmail}
      password={password} setPassword={setPassword}
      text={"Primeira vez? Cadastre-se!"}
      linkTo={"/singup"}

    />

  )
}

