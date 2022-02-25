import React from 'react';


const storeContext = React.createContext({
    cart:[],
    uesr:{},

    addProductToCart:(product)=>{},
    removeProductFromCart:(productId)=>{}
});

export default storeContext;