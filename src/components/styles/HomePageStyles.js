import styled, { createGlobalStyle } from 'styled-components';

const HomePageStyle = createGlobalStyle`
  body{
    background-color: var(--cor-cinza);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin: 52px 0;
  padding: 25px 36px;
  box-sizing: border-box;
  background-color: var(--cor-cinza);
`;

const Header = styled.header`
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
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: var(--cor-verde-escuro);
  }

  button:hover{
    cursor: pointer;
  }
`;

const Menu = styled.div`
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
    border-radius: 5px;
  }

  .icone:hover{
    cursor: pointer;
  }

  .paginaAtual{
    background-color: var(--cor-azul-claro);
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 137px;
  height: 154px;
  padding: 7px;
  border-radius: 5px;
  background-color: var(--cor-branca);
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));

  img{
    width: 123px;
    height: 72px;
    border-radius: 4px;
  }

  .titulo{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;

    h3{
      width: 100%;
      height: auto;
      max-height: 29px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow: clip;
      box-sizing: border-box;
      color: var(--cor-verde-escuro);
    }
  }

  p{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: var(--cor-azul);
  }
`;

export {Container, HomePageStyle, Header, Menu, ProductCard}