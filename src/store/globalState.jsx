import storeContext from "./storeContext";
import  {useState}  from "react";

const GlobalState =(props)=>{
    const [myCart,setMyCart]=useState([]);
    const [theUser,setTheUser]=useState({});

    const myAddToCart=(product)=>{
        console.log("global state add",product);

        let copy =[...myCart];
        let found=false;

        for(let i=0; i<copy.length; i++){
            let existingProd = copy[i];

            if(product.id === existingProd.id){
                existingProd.quantity += product.quantity; 
                found=true;
            }
        }
        if(!found){
            copy.push(product);
        }
        setMyCart(copy);
    };
    
    const myRemoveToCart =(productId)=>{
        console.log("Se elimino",productId);

        let copy =[...myCart];

        for(let i=0; i<copy.length; i++){
            let prod = copy[i];
            if(prod.id === productId){
                copy.splice(i,1);
            }
        }
        setMyCart(copy);
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