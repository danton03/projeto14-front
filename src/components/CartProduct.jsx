import { Product } from "./styles/CartPageStyles";
import trashImg from "../assets/images/trash.svg";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CartProduct(props){
  const { product } = props;
  const { user, setCart } = useContext(UserContext);
  const config = {
    headers: {
      "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
    }
  }

  function excluir() {
    const promise = axios.delete(`https://projeto14-sportcenter-back.herokuapp.com/cart/${product._id}`, config);
    promise.then((res) => {
      console.log(res.data);
      setCart(res.data); 
    });
    promise.catch((err)=>{
      console.log(err);
    });
    toast.promise(
      promise,
      {
        pending: 'Removendo...',
        success: 'Removido do carrinho',
        error: {
          render({ data }) {
            const code = data.response.status;
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
