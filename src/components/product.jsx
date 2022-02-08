import QuantityPicker from './quantityPicker';
import "./product.css"
import { useState } from 'react';


const Product = (props) => {
    const [quantity,setQuantity]=useState(1);

//crear una funcion que cambie el total
    const onQuantityChange=(value)=>{
        console.log("qnty changed",value);
        setQuantity(value);
    };

    const getTotal=()=>{
        let total = quantity *props.data.price;
        return "$" + total.toFixed(2);
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
                
                <a className="add-cart">Add to Cart</a> 
        </div>

        

    );  
};

export default Product;