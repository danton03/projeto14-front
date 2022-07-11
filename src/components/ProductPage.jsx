import { Container, PriceBar, ProductPageStyle, ReturnPage } from "./styles/ProductPageStyles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuContext from "../contexts/MenuContext";
import Header from "./Header";
import arrowImg from "../assets/images/arrow.svg";

export default function ProductPage() {
  const { productId } = useParams();
  const { setHomePage } = useContext(MenuContext);
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setHomePage('');
    const promise = axios.get(`http://localhost:5000/product/${productId}`);
    promise.then((res) => {
      setProduct(res.data);
    });
    promise.catch((err)=>{
      console.log(err);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function renderizaProduto() {
    const genre = product.details.genre[0].toUpperCase()+product.details.genre.slice(1);
    return(
      <>
        <div className="container-img">
          <ReturnPage onClick={handleReturn} >
            <img src={arrowImg} alt="Voltar para a home" />
          </ReturnPage>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="content">
          <h2>{product.name}</h2>
          <div className="section">
            <h4>{ genre }</h4>

            <div className="counter">
              <button 
                type="button"
                onClick={decrement}
              >
                - 
              </button>
              <span>{counter}</span>
              <button 
                type="button"
                onClick={() => setCounter(counter+1)}
              >
                + 
              </button>
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      </>
    );
  }

  function renderizaPreco() {
    const productPrice = parseFloat(product.price);
    const totalPrice = String((productPrice*counter).toFixed(2)).replace('.',',');
    return(
      <>
        <div className="total">
          <h4>Preço</h4>
          <p>
            {`R$ ${totalPrice}`}
          </p>
        </div>
        <button>Colocar no carrinho</button>
      </>
    );
  }

  function decrement() {
    if (counter > 1) {
      setCounter(counter-1);
    }
  }

  function handleReturn() {
    navigate(-1);
  }

  return(
    <>
      <ProductPageStyle />
      <Header />
      <Container>
        {product ?
          renderizaProduto() : 'Carregando...'
        }
      </Container>
      <PriceBar>
        {product ? 
          renderizaPreco()
          :
          <div className="total">
            <h4>Preço</h4>
          </div> 
        }
      </PriceBar>
    </>
  );
}