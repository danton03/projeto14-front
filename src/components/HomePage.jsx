import { Container, Header, HomePageStyle, ProductCard } from "./styles/HomePageStyles";
import logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";

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
      <Menu />
    </>
  );
}

