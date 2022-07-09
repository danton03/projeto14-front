import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import styled from 'styled-components';
 
export default function Pagamento() {

    return (
      <StyledCart>

        <Cards
          cvc={"896"}
          expiry={"25/04"}
          focused={"frwe"}
          name={"Danton Matheus"}
          number={4889143113112333}
          />

          </StyledCart>
      
    );
  }


  const StyledCart = styled.div`
  
  margin-top: 50px;
  width: 90%;
  
  `