import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Entrega(){

    const navigate = useNavigate()

    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")

    async function topayment(e){
        e.preventDefault()
        console.log("pago")

       const body={cep, estado, cidade, rua, bairro, numero, complemento}

       try {
        const request = await axios.post('http://localhost:5000/validaEndereco', body);

       const PrazosValores = request.data
        console.log(PrazosValores)
         
            // navigate("/pagamento")

       } catch (error) {
         alert(error.response.data);
       }

       console.log(body)


    }



    return(
        <>
        <StyledEndereco onSubmit={topayment}>

            
            
        <h2>Cadastrar endereço de entrega</h2>

            <div className="divflex">
                
            <input placeholder="CEP*" type="text"  value={cep} onChange={e=>setCep(e.target.value)}/>

            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank"> Não sei meu 
            CEP</a>
            </div>

            <input placeholder="Estado*" type="text"  value={estado} onChange={e=>setEstado(e.target.value)}/>
            <input placeholder="Cidade*" type="text"  value={cidade} onChange={e=>setCidade(e.target.value)}/>

            <input placeholder="Rua*" type="text"  value={rua} onChange={e=>setRua(e.target.value)}/>
            <input placeholder="Bairro*" type="text"  value={bairro} onChange={e=>setBairro(e.target.value)}/>

            <div className="divflex">

            <input placeholder="Numero*" type="text"  value={numero} onChange={e=>setNumero(e.target.value)}/>
            <input placeholder="Complemento" type="text"  value={complemento} onChange={e=>setComplemento(e.target.value)}/>
            </div>





            <button type="submit"> Confirmar endereco </button>


        </StyledEndereco>

        </>


        )
    }


const StyledEndereco = styled.form`

h2{
    margin-top: 10%;
    margin-bottom: 5%;
    color: black;
}

background-color: #55B4DC;
height: 100vh;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
margin-top: 10px;

input{
    width: 80%;
    height: 30px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
}

.divflex{
    width: 100%;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;

    input{
        width: 38.5%;
        margin-left: 6px;
        margin-right: 5px;

    }
}

a{
    color: gray;
}

button{
    margin-top: 10px;
    background-color: #FFFFFF;
    border-radius: 4px;
    border: none;
    height: 25px;
    width: 200px;

}

`