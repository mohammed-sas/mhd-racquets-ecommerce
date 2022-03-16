import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";





const useCart=()=>useContext(CartContext);


const useCartProvider=()=>{
    let token = localStorage.getItem("token");
    const addToCart=async (product)=>{
            try{
                let response = await axios.post('/api/user/cart',{product},{headers:{
                    authorization : token
                }});
                
                return response.status;
            }catch(error){
                console.log(error);
            }
    }
    const getCart= async ()=>{
        try{
            let response = await axios.get('/api/user/cart',{headers:{
                authorization : token
            }})
            return response;
        }catch(error){
            console.log(error)
        }
    }
    const removeFromCart=async (productId)=>{
        
        try{
            let response = await axios.delete(`/api/user/cart/${productId}`,{headers:{
                authorization : token
            }});
            return response;
        }catch(error){
            console.log(error)
        }
    }
    
    return {addToCart,getCart,removeFromCart};
}

const CartContext = createContext(null);
       
        
const CartProvider=({children})=>{
    let value= useCartProvider();
    
       
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export {CartProvider,useCart};
