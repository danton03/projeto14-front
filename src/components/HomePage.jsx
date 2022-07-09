import { Container, HomePageStyle, ProductCard } from "./styles/HomePageStyles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MenuContext from "../contexts/MenuContext";
import Header from "./Header";

export default function HomePage() {
  const { setHomePage } = useContext(MenuContext);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setHomePage('home');
    const promise = axios.get("http://localhost:5000/products");
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err)=>{
      console.log(err);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Header />
      <Container>
        {products.length > 0 ? renderizaProdutos() : 'carregando...'}
      </Container>
      <Menu />
    </>
  );
}

