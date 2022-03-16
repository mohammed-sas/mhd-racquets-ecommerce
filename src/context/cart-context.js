import axios from "axios";
import { createContext, useContext } from "react";





const useCart=()=>useContext(CartContext);


const useCartProvider=()=>{
    let token = localStorage.getItem("token");
    console.log(token);
    const addToCart=async (product)=>{
            try{
                let response = await axios.post('/api/user/cart',product,{headers:{
                    authorization : token
                }});
                console.log(response);
            }catch(error){
                console.log(error);
            }
    }

    return {addToCart};
}

const CartContext = createContext(null);
        let value = useCartProvider();

const CartProvider=({children})=>{

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export {CartProvider,useCart};
