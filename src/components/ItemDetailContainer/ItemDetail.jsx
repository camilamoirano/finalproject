import React, {useContext, useState} from "react";
import "../products/item.css";
import ItemCount from "../ItemCount";
import "../products/ItemListContainer.css"
import {cartContext} from "../../context/cartContext"
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function ItemDetail ({item}) {
  const [isInCart, setIsInCart] = useState(false); 
  const { addItem } = useContext(cartContext);

  function handleAddToCart(count){
    addItem(item, count)
    setIsInCart(true);
  }

  const stylePrice = {
    color: item.offer ? "#EF280F" : "#2f4f4f"
  }

  return (
    <div className="card">
      
      <div className="card-img">
        <img src={item.img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <h4 style={stylePrice}>$ {item.price}</h4>
      </div>
      { item.stock === 0 && <span style= {{color: "#aa0033"}}>Producto sin Stock</span>}
      <div className="botones">
      { 
        (!isInCart) ? 
        <ItemCount initial={1} onAddToCart={handleAddToCart} stock={item.stock} />
        : <Link to="/cart">
            <Button>Ir al carrito</Button>
          </Link> 
      }
      
      </div>
      
    </div>
  );
}

export default ItemDetail;