import FormsLogInSingUp from "./FormsLogInSingUp"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    async function logar(event){
        event.preventDefault();
        const body = {email, password};
        console.log(body)
        try {
         const request = await axios.post('http://localhost:5000/login', body);
          
             navigate("/compra")

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

