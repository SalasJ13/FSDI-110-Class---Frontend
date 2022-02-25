import storeContext from "./storeContext";
import  {useState}  from "react";

const GlobalState =(props)=>{
    const [myCart,setMyCart]=useState([]);
    const [theUser,setTheUser]=useState({});

    const myAddToCart=(product)=>{
        console.log("global state add",product);

        let copy =[...myCart];
        copy.push(product);
        setMyCart
    };
    
    const myRemoveToCart =(productId)=>{

    };
        return(
        <storeContext.Provider value={{
            cart:myCart,
            user:theUser,
            addProductToCart:myAddToCart,
            removeProductFromCart:myRemoveToCart
        }}>
            {props.children}
        </storeContext.Provider>
        );
};

export default  GlobalState;