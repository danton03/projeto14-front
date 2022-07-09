import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  background-color: var(--cor-branca);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -4px 12px;

  .icone,.icones{
    display: flex;
    align-items: center;
  }

  .icones{
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
  }

  .icone{
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 4px;
  }

  .icone:hover{
    cursor: pointer;
  }

  .paginaAtual{
    background-color: var(--cor-azul-claro);
  }
`;

export{NavBar};