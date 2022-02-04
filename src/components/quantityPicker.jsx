import { useState } from "react";
import "./quantityPicker.css";



const QuantityPicker = () =>{

    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {

        console.log("Plus clicked!");
        setQuantity(quantity+1)
    
    };

    const handleDecrease = () =>{

        let value = quantity -1

        if (value > 0){

            setQuantity(value);
        }
    }



    return(

        <div className="quantity-picker">

            <button className="btn btn-sm btn-info" onClick={handleIncrease}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-info" disabled={quantity === 1} onClick={handleDecrease}>-</button>

        </div>
    );
};

export default QuantityPicker;