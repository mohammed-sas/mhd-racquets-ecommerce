import axios from "axios";
import { createContext, useContext } from "react";





const useCart=()=>useContext(CartContext);


const useCartProvider=()=>{
    let token = localStorage.getItem("token");
    const addToCart=async (product)=>{
            try{
                let response = await axios.post('/api/user/cart',{product},{headers:{
                    authorization : token
                }});
                
                
            }catch(error){
                console.log(error);
            }
    }
    const getCart= async ()=>{
        try{
            let response = await axios.get('/api/user/cart',{headers:{
                authorization : token
            }})
            console.log(response.data.cart);
        }catch(error){
            console.log(error)
        }
    }

    return {addToCart,getCart};
}

const CartContext = createContext(null);
        let value = useCartProvider();

const CartProvider=({children})=>{

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export {CartProvider,useCart};
