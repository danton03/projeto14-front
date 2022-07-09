import FormsLogInSingUp from "./FormsLogInSingUp"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function SingUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [cpf, setCpf] = useState("")

    let navigate = useNavigate()

    async function cadastrar(e) {
        e.preventDefault();
        const body = { name, email, password, cpf, confirmPassword: passwordConfirm};
        console.log(body)
        try {
         await axios.post('http://localhost:5000/singup', body);

         navigate("/login")
        } catch (error) {
            alert(error.response.data);
        }
      }
        
    

    return(

        <FormsLogInSingUp 
        logar={cadastrar}
        TextButton={"Cadastrar"}
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        cpf={cpf} setCpf={setCpf}
        passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm}
        text={"Já tem uma conta? Entre agora!"} 
        linkTo={"/login"}
        />

    )
}
