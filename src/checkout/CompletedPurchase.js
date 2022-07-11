import Header from "../components/Header"
import { useContext } from "react"
import styled from 'styled-components';
import SendContext from "../contexts/SendContext";
import dayjs from "dayjs";


export default function CompletedPurchase(){

    const { dataPurchase} = useContext(SendContext);

    console.log(dataPurchase)
    const date = dayjs().format('DD/MM/YYYY') 
    const hour = dayjs().format('h:mm A') 
    const prazo = dataPurchase.dataSend.PrazosValores.prazoEntregaNormal
    console.log(date)



    return(
        <>
        <Header/>
        <Container>


        <h1>Pedido efetuado com sucesso</h1> 
        <h2>Compra comcluida em {date} as {hour}.</h2>
        <h2> Seu produto chegará em {prazo} dias.</h2>

        <h2>Detalhes do pedido:</h2>

        </Container>
        </>
            
        
    )
}

const Container = styled.div`

background-color: var(--cor-cinza);
height: 100%;
    margin-top: 30px;
    padding-top: 40px;

h2{
    margin: 10px;
}

h1{
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 25px;
}

`