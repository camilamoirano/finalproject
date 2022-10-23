import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addItem(item, count) {
        
        const newItem = {
            ...item, count
        }

        if(isInCart(newItem.id)) {
            const findProduct = cart.find(product => product.id === newItem.id);
            const productIndex= cart.indexOf(findProduct);
            const copyArray = [...cart];
            copyArray[productIndex].count += count;
            setCart(copyArray);
        } else {
            setCart([...cart, newItem]);
        }
    }

    function emptyCart (){
        return setCart ([]);
    }

    function getTotalItemsInCart(){
        return cart.reduce((acc, item) => acc += item.count, 0);
    }

    function isInCart (id){
        const found = cart.some( item => item.id === id);
        return found;
    }

    function deleteItem(id){
        return setCart(cart.filter(item => item.id !== id));
    }

    function getItemsTotalPrice(){
        return cart.reduce((acc, item) => acc += item.price * item.count, 0);
    }


    return(
        <cartContext.Provider value={{cart, addItem, getTotalItemsInCart, isInCart, emptyCart, deleteItem, getItemsTotalPrice}}>
            {children}
        </cartContext.Provider>
    )
}

export { cartContext };