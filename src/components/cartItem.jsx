import "./cartItem.css";
import "../service/dataService";
import { useState, useContext} from "react";
import storeContext from "../store/storeContext";

const CartItem = (props) =>{
    const {removeProductFromCart} =useContext(storeContext);

    const getTotal=()=>{
        let total=props.data.price*props.data.quantity;
        return "$" + total.toFixed(2);
    };
    const removeProd=()=>{
        removeProductFromCart(props.data.id);
    };

    return(
        <div className="cart-item">
            <table>
                <tr className="encabezado">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Option</th>
                </tr>
                <tbody>
            <th><img className='img-container' src={props.data.img} alt="Product"/> </th>

            <th><h4>{props.data.title}</h4>            </th>
            <th><label>{props.data.category}</label> </th>

            <th><label className="price" >${props.data.price.toFixed(2)}</label></th>
           <th> <label className="quantity">{props.data.quantity}</label></th> 
            <th> <label className="total">{getTotal()}</label></th> 

            <th><button onClick={removeProd} className="btn bnt-sm btn-danger">Remove</button> </th>
            </tbody>
            </table>
        </div>


    )
};

export default CartItem;