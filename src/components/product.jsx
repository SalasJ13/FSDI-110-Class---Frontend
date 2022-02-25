import QuantityPicker from './quantityPicker';
import "./product.css"
import "../service/dataService.js";
import { useState, useContext } from 'react';
import storeContext from '../store/storeContext';

const Product = (props) => {
    const [quantity,setQuantity]=useState(1);
    const {addProductToCart, removeProductFromCart} = useContext(storeContext);

//crear una funcion que cambie el total
    const onQuantityChange=(value)=>{
        //console.log("qnty changed",value);
        setQuantity(value);
    };

    const getTotal=()=>{
        let total = quantity *props.data.price;
        return "$" + total.toFixed(2);
    };

    const pushToCart=()=>{
        console.log("Pushing to cart",props.data.title);
        let prodToCart={
            ...props.data,
            quantity:quantity,
        };
        addProductToCart(props.data);
    }
    return(

        <div className="product">
            <img className='img-container' src={props.data.img} alt="Product"/>
            <div className="info-container">
                <h3>{props.data.title}</h3>
                <label className='price'><b>${props.data.price.toFixed(2)}</b></label>
                <label className='total'>{getTotal()}</label>
            </div>
            <div className="contador">
                <QuantityPicker onChange={onQuantityChange}/>
                
            </div>
                
                <a onClick={pushToCart} className="add-cart">Add to Cart</a> 
        </div>

        

    );  
};

export default Product;