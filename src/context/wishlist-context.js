import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const initialState = {
    wishlist:[],
    totalItems:0
}
const WishlistContext = createContext(initialState)
const useWishlist=()=>useContext(WishlistContext);

const WishlistProvider=({children})=>{
    let value = useWishlistAPI();
    return(
        <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
    )
}

const useWishlistAPI=()=>{
    const [wishlistState,wishlistDispatch] = useReducer(wishlistReducer,initialState);
   
    const addToWishlist=async (product)=>{
        try{
            let token = localStorage.getItem("token");
            let response = await axios.post("/api/user/wishlist",{product},{headers:{
                authorization:token
            }});
            if(response.status===201){
            wishlistDispatch({type:"ADD_TO_WISHLIST",payload:response.data.wishlist})
            }
        }catch(error){
            console.log(error);
        }
    }
    const deleteFromWishlist=async (id)=>{
        try{
            let token = localStorage.getItem("token");
            let response = await axios.delete(`/api/user/wishlist/${id}`,{headers:{
                authorization:token
            }});
            if(response.status===200)
            wishlistDispatch({type:"DELETE_FROM_WISHLIST",payload:response.data.wishlist});
        }catch(error){
            console.log(error);
        }
    }

    return {wishlistState,wishlistDispatch,addToWishlist,deleteFromWishlist};
}





export {WishlistProvider,useWishlist};