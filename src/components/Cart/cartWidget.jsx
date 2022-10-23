import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/cartContext";
import { useContext } from 'react';
import "./cartWidget.css"

export default function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartContext);

    return (
        <Link to={"/cart"}>
            <div>
                <FontAwesomeIcon className="cart-icono" icon={faCartArrowDown}/>
                <div className={getTotalItemsInCart() <= 0 ? 'display-none' : 'display'}>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</div>
            </div>
        </Link>
    )
}