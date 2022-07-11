import styled from "styled-components";

const Topo = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  background-color: var(--cor-branca);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .logo, button{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo{
    gap: 4px;
    font-family: 'MuseoModerno', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: var(--cor-azul);

    img{
     width : 26px;
     height: 25.05px;
    }
  }

  button{
    padding: 0;
    background: none;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: var(--cor-verde-escuro);
  }

  button:hover{
    cursor: pointer;
  }
`;

export {Topo};