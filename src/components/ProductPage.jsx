import { Container, PriceBar, ProductPageStyle, ReturnPage } from "./styles/ProductPageStyles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuContext from "../contexts/MenuContext";
import Header from "./Header";
import arrowImg from "../assets/images/arrow.svg";
import UserContext from "../contexts/UserContext";
import SizeButton from "./SizeButton";
import { toast } from "react-toastify";

export default function ProductPage() {
  const { productId } = useParams();
  const { setHomePage } = useContext(MenuContext);
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const [clicked, setClicked] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setHomePage(`/produto/${productId}`);
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
          <div className="escolher-tamanho">
            <h4>Escolha o tamanho</h4>
            <div className="tamanho">
              {product.size.map((tamanho, id) => {
                  return(
                    <SizeButton
                      key={id} 
                      type="button"
                      clicked = {clicked}
                      setClicked = {setClicked}
                    >
                      {tamanho}
                    </SizeButton>
                  )
                }
              )}
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
        <button type="button" onClick={addToCart} >Colocar no carrinho</button>
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

  function addToCart() {
    if(!user){
      navigate("/login");
      toast.info('Faça o login para adicionar um produto ao carrinho.');
    }

    else if(clicked === ''){
      toast.info('Selecione o tamanho do produto');
    }

    else{
      const genre = product.details.genre[0].toUpperCase()+product.details.genre.slice(1);
      const config = {
        headers: {
          "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
        }
      }
      const body = {
        name: product.name,
        image: product.image,
        price: product.price,
        size: clicked,
        amount: counter,
        genre
      }

      const promise = axios.post(`http://localhost:5000/cart`,body, config);
      promise.then((res) => {
        console.log(res.data);
      });
      promise.catch((err)=>{
        console.log(err);
      }); 
      
      toast.promise(
        promise,
        {
          pending: 'Carregando...',
          success: 'Saída adicionada com sucesso!',
          error: {
            render({ data }) {
              const code = data.response.status;
              //Verificar se esses são os códigos corretos
              if (code === 401 || code === 422) {
                const message = data.response.data;
                return message;
              }
              else {
                return "Ops, tivemos uma falha interna";
              }
            }
          }
        }
      );
     
      navigate("/carrinho");
    }
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