import FormsLogInSingUp from "./FormsLogInSingUp"
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";

export default function LogIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext);

    let navigate = useNavigate()

    async function logar(event){
        event.preventDefault();
        const body = {email, password};
        console.log(body)
        try {
         const request = await axios.post('http://localhost:5000/login', body);
         
         const token = request.data
         
         setUser(token)
       
          
              navigate("/entrega")

        } catch (error) {
          alert(error.response.data);
        }
      }


    return(

    
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

