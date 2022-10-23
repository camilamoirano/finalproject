import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { createBuyOrder } from "../../services/firestore";
import "./CheckoutForm.css"

export default function CheckoutForm(){
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const navigate = useNavigate();
    const context = useContext(cartContext);
    const { cart, getItemsTotalPrice, emptyCart } = context;

    function handleCheckout(event){
        event.preventDefault();
        const orderData = {
          buyer: dataForm,
          items: cart,
          date: new Date(),
          total: getItemsTotalPrice(),
        };
        createBuyOrder(orderData).then( orderid => {
          navigate(`/checkout/${orderid}`);
        });
      }

    function inputChangeHandler(event){
        const inputName = event.target.name;
        const value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }

    return(
        <div className="form-container">
        <h2 className="datos">Completá tus datos para realizar la orden:</h2>
        <form onSubmit={handleCheckout}>
          <div className="form-item">
            
            <input
              value={dataForm.name}
              onChange={inputChangeHandler}
              name="name"
              type="text"
              placeholder="Nombre"
              required
              className="inp"
            />
          </div>
  
          <div className="form-item">
            
            <input
              value={dataForm.phone}
              onChange={inputChangeHandler}
              name="phone"
              type="text"
              placeholder="Telefono"
              required
              className="inp"
            />
          </div>
  
          <div className="form-item">
            
            <input
              value={dataForm.email}
              onChange={inputChangeHandler}
              name="email"
              type="text"
              placeholder="Correo"
              required
              className="inp"
            />
          </div>
        <div className="enviar">
        <Button type="submit" onClick={emptyCart}>Enviar pedido</Button>
        </div>
          
        </form>
      </div>
    )
}