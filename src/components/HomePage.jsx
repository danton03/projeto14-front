import { Container, Header, HomePageStyle, Menu, ProductCard } from "./styles/HomePageStyles";
import logo from "../assets/images/logo.svg";
import home from "../assets/images/home.svg";
import homeAzul from "../assets/images/home-azul.svg";
import cart from "../assets/images/cart.svg";
import cartAzul from "../assets/images/cart-azul.svg";
import logout from "../assets/images/log-out.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const promise = axios.get("http://localhost:5000/products");
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err)=>{
      console.log(err);
    });
  },[]);

  function renderizaProdutos() {
    return products.map((product)=>{
      return(
        <ProductCard key={product._id}>
          <img src={product.image} alt={product.name} />
          <div className="titulo">
            <h3>{product.name}</h3>
          </div>
          <p>{`R$ ${product.price.replace('.',',')}`}</p>
        </ProductCard>
      )
    });
  }

  return(
    <>
      <HomePageStyle />
      <Header>
        <div className="logo">
          <img src={logo} alt="logo da loja" />
          <h1>Sport Center</h1>
        </div>
        <button type="button">Fulano</button>
      </Header>
      <Container>
        {products.length > 0 ? renderizaProdutos() : 'carregando...'}
      </Container>
      <Menu>
        <div className="icones">
          <div className="icone paginaAtual">
            <img src={homeAzul} alt="ícone home" />
          </div>
          <div className="icone">
            <img src={cart} alt="ícone carrinho" />
          </div>
          <div className="icone">
            <img src={logout} alt="ícone logout/login" />
          </div>
        </div>
      </Menu>
    </>
  );
}

