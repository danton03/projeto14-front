import styled, { createGlobalStyle } from 'styled-components';

const HomePageStyle = createGlobalStyle`
  body{
    background-color: var(--cor-cinza);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  row-gap: 25px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 52px 0;
  padding: 25px 36px;
  box-sizing: border-box;
  background-color: var(--cor-cinza);
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 137px;
  height: auto;
  padding: 7px;
  border-radius: 5px;
  background-color: var(--cor-branca);
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  img{
    width: 123px;
    height: 81px;
    /* border-radius: 4px; */
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
      max-height: 38px;
      font-weight: 700;
      font-size: 12px;
      line-height: 1.2;
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
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 10px;
    text-align: center;
    color: var(--cor-azul);
  }
`;

export {Container, HomePageStyle, ProductCard}