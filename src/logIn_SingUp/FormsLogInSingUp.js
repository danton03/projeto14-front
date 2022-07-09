import styled from 'styled-components';
import Logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';


export default function FormsLogInSingUp({logar, name, setName, password, setPassword, passwordConfirm, setPasswordConfirm, email, setEmail, TextButton, setCpf, cpf, text, linkTo}){

    return(
        <StyledLogin>
            <img src={Logo} alt="" />
            <h1>Sport Center</h1>

        <StyledForm onSubmit={logar}>
            {
                !setName ?
                 <></> :
                 <>
                <input type="text" placeholder='Nome' value={name} onChange={e=>setName(e.target.value)}/>

                <input type="text" placeholder='CPF' value={cpf} onChange={e=>setCpf(e.target.value)}/>
                 </>
            }
            <input type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder='senha' value={password} onChange={e=>setPassword(e.target.value)}/>
            {
                !setName ?
                 <></> :
                <input type="password" placeholder='Confirme a senha' value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)}/>
            }
            <button type='submit'> {TextButton}</button>

        </StyledForm>

        <StyledChangeDisplay>

<Link to={linkTo}>
<h2>{text}</h2>    
     </Link>

</StyledChangeDisplay>


        
        </StyledLogin>
    )
}

const StyledLogin = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #55B4DC;

img{

    width: 86px;
    height: 86px;
}

h1{
    font-family: 'MuseoModerno', cursive;
    font-weight: 700;
    font-size: 36px;
    color: #FFFFFF;
    margin-bottom: 36px;
}

`
        
    




const StyledForm = styled.form`


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
    color: #55B4DC;
}
`

const StyledChangeDisplay = styled.div`

height:18px;
margin-top: 32px;
color: #FFFFFF;
font-size: 15px;

a{
    text-decoration: none;
    color: #FFFFFF;
}
`