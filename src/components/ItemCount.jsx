import React, { useState} from "react";
import "./products/ItemListContainer.css"
import Button from "./Button/Button";

function ItemCount({stock, onAddToCart}){
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleSubstract(){
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div>
                <Button onClick={handleSubstract}>-</Button>
                <span className="Count">{count}</span>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button onClick={() => {
                        onAddToCart(count);
                        }}>
                    Agregar al carrito 
                </Button>
            </div>
        </div>    
    );
}

export default ItemCount;