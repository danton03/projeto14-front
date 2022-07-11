// import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import SendContext from "../contexts/SendContext"
import UserContext from "../contexts/UserContext"
import Header from "../components/Header"
import styled, { createGlobalStyle } from 'styled-components';


export default function Entrega(){



    const navigate = useNavigate()

    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")

    const { setDataSend } = useContext(SendContext);
    const { user , setUser } = useContext(UserContext);

    setTimeout(()=>{if(!user){
        navigate("/")}
    },200)
   

      
    

    async function topayment(e){
        e.preventDefault()

       const body={cep, estado, cidade, rua, bairro, numero, complemento}

       const config = {
        headers: {
            "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
        }
        }

       try {
        const request = await axios.post('http://localhost:5000/validaEndereco',body, config);

       const PrazosValores = request.data
        console.log(PrazosValores)

        setDataSend({body, PrazosValores})
         
             navigate("/pagamento")

       } catch (error) {
         alert(error.response.data);
       }

       console.log(body)


    }



    return(
        <>
            <Header/>

        <StyledEndereco onSubmit={topayment}>
      
        <h2>Cadastrar endereço de entrega</h2>

            <div className="divflexCep">
                
            <input placeholder="CEP*" type="text" required  value={cep} onChange={e=>setCep(e.target.value)}/>

            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank"> Não sei meu 
            CEP</a>
            </div>

            <input placeholder="Estado*" type="text"  required value={estado} onChange={e=>setEstado(e.target.value)}/>
            <input placeholder="Cidade*" type="text" required  value={cidade} onChange={e=>setCidade(e.target.value)}/>

            <input placeholder="Rua*" type="text" required  value={rua} onChange={e=>setRua(e.target.value)}/>
            <input placeholder="Bairro*" type="text" required  value={bairro} onChange={e=>setBairro(e.target.value)}/>

            <div className="divflex">

            <input placeholder="Numero*" type="number" required value={numero} onChange={e=>setNumero(e.target.value)}/>
            <input placeholder="Complemento*" type="text" required  value={complemento} onChange={e=>setComplemento(e.target.value)}/>
            </div>

            <button type="submit"> Confirmar endereco </button>


        </StyledEndereco>

        </>


        )
    }

const StyledEndereco = styled.form`

background-color: var(--cor-cinza);



height: 100vh;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
margin-top: 10px;

h2{
    margin-top: 10%;
    margin-bottom: 5%;
    color: black;
}

input{
    width: 80%;
    height: 30px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
}

.divflexCep{
    width: 80%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;

    input{
        width: 60%;
    height: 30px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    }
}
.divflex{
    width: 100%;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;

    
    input{
        width: 39.5%;
        margin-left: 6px;
        margin-right: 5px;
        
    }
}



a{
    color: gray;
}

button{
    margin-top: 20px;
    height: 36px;
    width: 70%;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    color: black;
}

`