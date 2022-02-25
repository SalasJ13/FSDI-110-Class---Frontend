import { useContext, useState } from "react";
import storeContext from "../store/storeContext";
import Product from "./product";

const Cart = () => {
    const {cart}=useContext(storeContext);

    return(
        <div className="page-cart">
            <h1>Cart: {cart.length} Products</h1>
            
            <div className="products">
            <ul>
            {cart.map((prod,index) => (
                <li key={(prod.id,index)}>{prod.title}</li>
            ))}
            </ul>
            </div>
        </div>
    );
};
export default Cart;