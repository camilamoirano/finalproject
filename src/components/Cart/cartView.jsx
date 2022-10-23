
import React from 'react';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext.jsx"
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx'; 
import "./cartView.css"


function Cart() {
  const context = useContext(cartContext);
  const { cart, deleteItem, emptyCart, getItemsTotalPrice } = context;
  
  

  if (cart.length === 0) {
    return <div className="emptyCart">
               <h1 className='empty'>Tu carrito esta vacio...
                    <Link className="linkHome" to={"/"}>
                      <Button>Seguir comprando</Button>
                    </Link>
              </h1>
           </div>
  }

  return (
    <div className='cartView'>
      <h1 className='carrito'>Tu Carrito:</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => deleteItem(item.id)} className="boton">X</button>
                </td>
                <th>$ {item.price * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="cartTotal">El total de su compra es: ${getItemsTotalPrice()}</h2>
      <div className="botonesCart">
        <Button onClick={emptyCart}>Vaciar carrito</Button>
        <Link to="/form">
          <Button>Finalizar compra</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart

