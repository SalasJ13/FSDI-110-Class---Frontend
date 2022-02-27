import React from 'react';


const storeContext = React.createContext({
    cart:[],
    user:{},

    addProductToCart:(product)=>{},
    removeProductFromCart:(productId)=>{}
});

export default storeContext;