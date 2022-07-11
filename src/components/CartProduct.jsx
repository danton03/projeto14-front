import { Product } from "./styles/CartPageStyles";
import trashImg from "../assets/images/trash.svg";

export default function CartProduct(props){
  const { product } = props;

  function excluir() {
    //excluir pelo id do produto
    //vou precisar fazer uma requisição com o axios aqui
    //adicionar o react-toastfy aqui
    console.log("excluído");
  }

  return(
    <Product>
      <div className="produto">
        <img src={product.image} alt={product.name} />
        <div className="descricao">
          <h4>{product.name}</h4>
          <div className="infos">
            <div className="container-info">
              <h5>Tam. : {product.size}</h5>
            </div>

            <div className="container-info">
              <h5>Quant. : {product.amount}</h5>
            </div>
          </div>
          <p className="valor">{`R$ ${product.price.replace('.',',')}`}</p>
        </div>
      </div>
      <div className="excluir" onClick={excluir}>
        <img src={trashImg} alt="excluir" />
      </div>
    </Product>
  );
}