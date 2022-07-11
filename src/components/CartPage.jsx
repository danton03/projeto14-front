import { useContext, useEffect, useState } from "react";
import MenuContext from "../contexts/MenuContext";
import Header from "./Header"
import { CartPageStyle, Container, PriceBar } from "./styles/CartPageStyles";
import arrowImg from "../assets/images/arrow-black.svg";
import homeImg from "../assets/images/home.svg";
import axios from "axios";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function CartPage() {
  const navigate = useNavigate();
  const { setHomePage } = useContext(MenuContext);
  const { user, cart, setCart, total, setTotal } = useContext(UserContext);
  const config = {
    headers: {
      "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
    }
  }
  
  useEffect(() => {
    setTimeout(()=>{if(!user){
        toast.info("Você precisa estar logado para acessar o carrinho");
        navigate("/");
      }
    },200)
    setHomePage('/carrinho');
    const promise = axios.get(`http://localhost:5000/cart`, config);
    promise.then((res) => {
      setCart(res.data); 
    });
    promise.catch((err)=>{
      console.log(err);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function renderizaCarrinho() {
    return(
      <>
        <div className="topo">
          <img src={arrowImg} className="seta" alt="Voltar a página" onClick={()=>(navigate(-1))}/>
          <h3>Carrinho</h3>
          <img src={homeImg} alt="Voltar para a home" onClick={()=>navigate('/')} />
        </div>
        <h1>{`${cart.length} ${cart.length > 1 ? 'itens' : 'item'}`}</h1>
        <div className="produtos">
          {
            cart.map((product, id)=>{
              return(
                <CartProduct product={product} key={id}/>
              )
            })
          }
        </div>
      </>
    );
  }

  function renderizaPriceBar(params) {
    let valorTotal = 0;
    cart.map((produto) => {
      valorTotal = valorTotal + (parseFloat(produto.price));
    })
    setTotal(valorTotal);
    return(
      <PriceBar>
        <div className="total">
          <h4>{"Total"}</h4>
          <p>R$ {String(total.toFixed(2)).replace('.',',')}</p>
        </div>
        <button type="button" onClick={() => navigate("/entrega")}>Comprar</button>
      </PriceBar>
    );
  }

  return(
    <>
      <CartPageStyle />
      <Header />
      <Container>
        {cart.length ? 
          renderizaCarrinho()
          :
          <p>Seu carrinho está vazio.</p>
        }
      </Container>
      
      {cart.length ? 
        renderizaPriceBar()
        : ''
      }
    </>
  );
}