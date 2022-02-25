import { useContext } from "react";
import storeContext from "../store/storeContext";


function Cart(){
    const {cart}=useContext(storeContext);
    return(
        <div className="page-cart">
            <h1>Cart: {cart.length} Products</h1>
            <div className="products">
                <ul>
                        {cart.map(prod => <li key={prod.id}>{prod.title}</li>)};
                </ul>
            </div>
        </div>
    );
};
export default Cart;