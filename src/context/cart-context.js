import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import {cartReducer} from '../reducer/cartReducer.js';




const useCart=()=>useContext(CartContext);

let cartInitialState={
    cart:[],
    totalPrice:0,
    totalItems:0,
    discount:0,
    orderSuccess:false,
}

const useCartProvider=()=>{
    const [cartState,cartDispatch] = useReducer(cartReducer,cartInitialState);
    
    const addToCart=async (product)=>{
            try{
                let token = localStorage.getItem("token");              
                let response = await axios.post('/api/user/cart',{product},{headers:{
                    authorization : token
                }});
                cartDispatch({type:"ADD_TO_CART",payload:response.data.cart});
                return response.status;
            }catch(error){
                console.log(error);
            }
    }
    const getCart= async ()=>{
        try{
            let token = localStorage.getItem("token"); 
            let response = await axios.get('/api/user/cart',{headers:{
                authorization : token
            }})
            cartDispatch({type:"GET_CART",payload:response.data.cart});
        }catch(error){
            console.log(error)
        }
    }
    const removeFromCart=async (productId)=>{
        
        try{
            let token = localStorage.getItem("token"); 
            let response = await axios.delete(`/api/user/cart/${productId}`,{headers:{
                authorization : token
            }});
            cartDispatch({type:"UPDATE_CART",payload:response.data.cart});
        }catch(error){
            console.log(error)
        }
    }

    const qtyIncDec=async (action,productId)=>{
        
        try{
            let token = localStorage.getItem("token"); 
            let response = await axios.post(`/api/user/cart/${productId}`,{action},{headers:{
                authorization : token
            }});
            cartDispatch({type:"UPDATE_CART",payload:response.data.cart});
        }catch(error){
            console.log(error)
        }
    }

    const deleteCart=async()=>{
        try{
            let token = localStorage.getItem("token"); 
            let response = await axios.delete('/api/user/cart',{headers:{
                authorization:token
            }})
            cartDispatch({type:"UPDATE_CART",payload:response.data.cart});
        }catch(error){
            console.log(error);
        }
    }
    
    return {cartState,addToCart,getCart,removeFromCart,qtyIncDec,cartDispatch,deleteCart};
}

const CartContext = createContext(null);
       
        
const CartProvider=({children})=>{
    let value= useCartProvider();
    
       
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export {CartProvider,useCart};
