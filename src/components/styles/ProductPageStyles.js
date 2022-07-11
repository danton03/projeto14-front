import styled, { createGlobalStyle } from 'styled-components';

const ProductPageStyle = createGlobalStyle`
  body{
    background-color: #F8F8F8;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 52px;
  margin-bottom: 76px;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  .container-img{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;

    img{
      width: 100%;
      height: auto;
    }
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 30vh;
    padding: 25px 16px;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    background-color: #F8F8F8;
    box-sizing: border-box;

    h2{
      font-family: 'Inter', sans-serif;
      display: flex;
      width: 100%;
      height: auto;
      box-sizing: border-box;

      font-weight: 700;
      font-size: 18px;
      line-height: 1.3;
      color: var(--cor-verde-escuro);
    }

    .section{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: auto;
      box-sizing: border-box;

      h4{
        display: flex;
        align-items: center;
        width: 100%;
        height: 26px;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #C6C6C6;
      }
    }

    .counter{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      span{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: var(--cor-verde-escuro);
      }

      button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        background-color: var(--cor-azul);
        border: none;
        border-radius: 4px;
        
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: var(--cor-branca);
      }
    }

    p{
      display: flex;
      width: 100%;
      margin-top: 6px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.3;
      color: var(--cor-verde-escuro);
    }
  }
`;

const ReturnPage = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: var(--cor-azul-claro);

  img{
    width: 28px;
    height: 28px;
  }

  img:hover{
    cursor: pointer;
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
`;


export {Container, ProductPageStyle, PriceBar, ReturnPage}