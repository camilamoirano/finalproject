import React from "react";
import Button from "../Button/Button";
import "../Button/button.css"
import "./item.css";
import {Link} from "react-router-dom";

function Item(props) {
  const { price, title, img, category} = props;
  const urlDetalle = `/producto/${props.id}`; 
  

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{category}</p>
        <h4>$ {price}</h4>
      </div>
      <Link to={urlDetalle} className="link">
        <Button className="btn">Ver más</Button>
      </Link>
    </div>
  );
}

export default Item;
