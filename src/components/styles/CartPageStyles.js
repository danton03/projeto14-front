import styled, { createGlobalStyle } from "styled-components";

const CartPageStyle = createGlobalStyle`
  body{
    background-color: var(--cor-branca);
  }

  #root{
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div`
  margin-top: 52px;
  padding: 0 20px;
  box-sizing: border-box;

  &, .produtos{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
  
  .topo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 18px;
    margin-bottom: 8px;

    .seta{
      width: 18px;
      height: 18px;
    }

    .icone{
      width: 22px;
      height: 22px;
    }

    img:hover{
      cursor: pointer;
    }

    h3{
      font-family: 'Inter', sans-serif;
      display: flex;
      height: auto;

      font-weight: 700;
      font-size: 16px;
      line-height: 1.3;
      color: var(--cor-verde-escuro);
    }
  }

  h1{
    font-family: 'Inter', sans-serif;
    display: flex;
    height: auto;
    width: 100%;
    margin: 12px 0;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: var(--cor-verde-escuro);
  }
`;

const Product = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 10px 0;
  gap: 10px;
  border-top: solid 1px #F8F8F9;

  .valor{
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 4px;

    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: var(--cor-azul);
  }

  .produto{
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    img{
      width: 110px;
      height: 110px;
      border-radius: 12px;
    }
  }


  .descricao{
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    h4{
      font-family: 'Inter', sans-serif;
      display: flex;
      width: 80%;
      height: auto;
      max-height: 39px;
      font-weight: 600;
      font-size: 12px;
      line-height: 1.3;
      overflow-y: hidden;
      text-overflow: clip;
      color: var(--cor-verde-escuro);
    }
  
    h5{
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      margin-top: 4px;
  
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      color: #C6C6C6;
    }
  }

  .infos{
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
  }

  .container-info{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 0 4px;
    border-radius: 40px;
    background-color: #F8F8F9;

    h5{
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      margin: 4px 0;
      padding-left: 0;

      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      color: var(--cor-verde-escuro);
    }
  }

  .excluir{
    position: absolute;
    top: 13px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    background-color: #FDE7E7;

    img{
      width: 20px;
      height: 20px;
    }
  }
`;

const PriceBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  .total{
    h4{
      display: flex;
      width: 100%;
      margin-bottom: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      line-height: 1.2;
      color: #C6C6C6;
    }
  
    p{
      font-family: 'Inter', sans-serif;
      display: flex;
      width: 100%;
      height: auto;
      box-sizing: border-box;
  
      font-weight: 700;
      font-size: 16px;
      line-height: 1.2;
      color: var(--cor-verde-escuro);
    }

  }

  button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  background-color: var(--cor-azul);
  border: none;
  border-radius: 10px;
  
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--cor-branca);
  }

  button:hover{
    cursor: pointer;
  }
`;

export {Container, CartPageStyle, Product, PriceBar};