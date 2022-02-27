import { useContext, useState } from "react";
import storeContext from "../store/storeContext";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
    const {cart}=useContext(storeContext);

    return(
        <div className="cart">
            <h1>Page Cart</h1>
            <h2>Cart: {cart.length} Products</h2>
            
            <div className="products">
            <ul>
            {cart.map((prod) => (
                <CartItem key={prod.id} data={prod}></CartItem>
            ))}
            </ul>
            </div>
        </div>
    )
}
export default Cart;
///https://github.com/MikeSadler84/108organika/blob/master/src/components/cart.jsx