import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
// import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import SendContext from "../contexts/SendContext"
import axios from 'axios';
import UserContext from "../contexts/UserContext"
import styled from 'styled-components';
import Header from '../components/Header';

 

export default function Pagamento() {
  
  const [name, setName] = useState("")
  const [ncard, setNcard] = useState("")
  const [validate, setValidate] = useState("")
  const [securityCode, setSecurityCode] = useState("")

  
  const navigate = useNavigate()
  
  const { dataSend, setDataPurchase} = useContext(SendContext);
  const { cart,total, user} = useContext(UserContext);
  

  setTimeout(()=>{if(!user){
    navigate("/")}
  },200)


  try{

    let ValorProduto = 50
    let ValorFrete = parseFloat(dataSend.PrazosValores.valorEntregaNormal)
    let PrazoEntrega = parseFloat(dataSend.PrazosValores.prazoEntregaNormal)
    let Valortotal = total


    async function pagar(e){
    e.preventDefault()
    
    const paymentData = {name, ncard, validate, securityCode}
    const body = {paymentData, dataSend, cart}
    setDataPurchase(body)

    const config = {
      headers: {
        "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
      }
      }

    try {

      const request = await axios.post('http://localhost:5000/DatasCompra', body, config);
      navigate("/compraFeita")

    } catch (error) {
       alert(error.response.data);
     }


  }

 

    return (

      <>
      <Header/>

      <Container>
  
      <ResumoCompra>

        <h2> Resumo da compra</h2>
        <div className='flexvalor'> <p>Produto </p> <p>R$ {ValorProduto.toFixed(2)}</p> </div>
        <div className='flexvalor'> <p>Frete </p> <p>R$ {ValorFrete.toFixed(2)}</p> </div>
        <div className='flexvalor'> <h4>Total </h4> <h4>R$ {Valortotal.toFixed(2)}</h4> </div>
        <div className='flexvalor'> <p>Prazo de entrega </p> <p> {PrazoEntrega} dias </p> </div>

      </ResumoCompra>

      <h2>Pagamento</h2>

      <StyledCart>

        

        <Cards
          cvc={securityCode}
          expiry={validate}
          
          name={name}
          number={ncard}
          />

      </StyledCart>

      <StyledForm onSubmit={pagar}>

              <input type="number" required min="100" max="9999999999999999"  placeholder='Número do cartão' value={ncard} onChange={e=>setNcard(e.target.value)}/>

              <input type="text" required minLength="4" maxLength="26"  placeholder='Nome' value={name} onChange={e=>setName(e.target.value)}/>

              <input type="number" min="0101" max="1299" required placeholder='Validade' value={validate} onChange={e=>setValidate(e.target.value)}/>
                  
              <input type="number" min="100" max="999" required placeholder='Código de segurança' value={securityCode} onChange={e=>setSecurityCode(e.target.value)}/>

              <button type='submit'> {"Finalizar compra"}</button>

      </StyledForm>
            
      </Container>
      </>
          
    )}

    catch{
      
      navigate("/")
    }   
}

  const StyledCart = styled.div`
  
  margin-top: 50px;
  margin-bottom: 20px;
  
  `

const StyledForm = styled.form`

margin-top: 20px;

display: flex;
flex-direction: column;
align-items: center;
width: 100%;

input{
    width: 80%;
    height: 46px;
    margin-bottom: 11px;
    border-radius: 5px;
    border: none;  
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

const Container = styled.div`

background-color: var(--cor-cinza);
height: 100%;

h2{
  display: flex;
  justify-content: center;
  margin: 5px;
  font-size: 20px;
}

padding-top: 20px;
`

const ResumoCompra = styled.div`


margin-bottom: 30px;
margin-top: 60px;

.flexvalor{
display: flex;
justify-content:  space-between;
margin: 10px;


}

h4{
  margin-top: 5px;
  font-weight: bolder;
}


`
