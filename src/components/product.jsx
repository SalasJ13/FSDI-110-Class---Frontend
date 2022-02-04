import QuantityPicker from './quantityPicker';
import "./product.css"


const Product = (props) => {

    return(

        <div className="product">
            <img className='img-container' src={props.data.img} alt="Product"/>
            <div className="info-container">
                <h3>{props.data.title}</h3>
                <label>${props.data.price}</label>
                <label>$20.00</label>
            </div>
            <div className="contador">
                <QuantityPicker/>
            </div>
                
                <a className="add-cart">Add to Cart</a> 
        </div>


        

    );  
};

export default Product;