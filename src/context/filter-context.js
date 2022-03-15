import { createContext, useContext,useState,useEffect, useReducer } from "react";
import axios from "axios";
const FilterContext = createContext(null);


const FilterProvider =({children})=>{
    const filterReducer=(state,action)=>{
    
    switch (action.type) {
    case "FETCHING_DATA":
        return{
            ...state,
            loading:true,
        };
    
    case "FETCHED" :
        return{
            ...state,
            loading:false,
            items:action.data,
            data:action.data,
        };
    case "CATEGORIES":
        if(action.isSelected){
            return{
                ...state,
                categories:[...state.categories,action.payload],
                [`show${action.payload}`]: true,
            }
        }else{
            return{
                ...state,
                categories:state.categories.filter(item=> item != action.payload),
                [`show${action.payload}`]: false,
            }
        }
      case "PRICE_RANGE":
        return {
          ...state,
          maxPrice: Number(action.payload),
        };
      
      case "HIGH_TO_LOW":
        return {
          ...state,
          highToLow: true,
          lowToHigh: false,
        };
      case "LOW_TO_HIGH":
        return {
          ...state,
          lowToHigh: true,
          highToLow: false,
        };

      case "RATING":
          return{
              ...state,
              rating:action.payload
          }

      case "CLEAR_FILTER":
        return {
          ...state, 
        items:[...state.data],  
        lowToHigh: false,
        highToLow: false,
        categories:[],
        showRacquet:false,
        showShuttleCock:false,
        showString:false,
        showShoe:false,
        maxPrice: 14000,
        rating:0,      
        };

      default:
        return state;
    }
  

    }
    const [state,filterDispatch] = useReducer(filterReducer,{
        items: [],
        data:[],
        loading:true,    
        lowToHigh: false,
        highToLow: false,
        categories:[],
        showRacquet:false,
        showShuttleCock:false,
        showString:false,
        showShoe:false,
        maxPrice: 14000,
        rating:0,
      })

    useEffect(()=>{
  
      const fetchProducts=async ()=>{
        try{
        filterDispatch({type:"FETCHING_DATA"})
        const response = await axios.get('/api/products');
        filterDispatch({type:"FETCHED",data:response.data.products});
        }catch(error){

        }
        
  
      }
      fetchProducts();
  
    },[]);

    
    

    return (
        <FilterContext.Provider value={{state,filterDispatch}}>{children}</FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext);

export {FilterProvider,useFilter};