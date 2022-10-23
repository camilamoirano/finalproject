import React from "react";
import Item from "./Item";
import "./ItemListContainer.css"

function ItemList(props) {
    return(
        <div className="mainContainer">
            {props.data.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        category={item.category}
                        stock={item.stock}
                    />
                );
            })}    
        </div>
    )
}

export default ItemList