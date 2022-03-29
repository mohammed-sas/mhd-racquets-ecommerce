import { createContext, useContext,useEffect, useReducer } from "react";
import axios from "axios";
const FilterContext = createContext(null);


const FilterProvider =({children})=>{
    const filterReducer=(state,action)=>{
    const {payload} = action;
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
            items:payload,
            data:payload,
        };
    case "CATEGORIES":
        if(payload.isSelected){
            return{
                ...state,
                categories:[...state.categories,...state.featuredCatgories,payload.category],
                [`show${payload.category}`]: true,
                featuredCatgories:[]
            }
        }
        else{
            return{
                ...state,
                categories:state.categories.filter(item=> item != payload.category),
                [`show${payload.category}`]: false,
                featuredCatgories:[]
            }
        }
      case "PRICE_RANGE":
        return {
          ...state,
          maxPrice: Number(payload),
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
              rating:payload
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
        featuredCatgories:[]     
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
        featuredCatgories:[],
        rating:0,
      })

    useEffect(()=>{
  
      const fetchProducts=async ()=>{
        try{
        filterDispatch({type:"FETCHING_DATA"})
        const response = await axios.get('/api/products');
        filterDispatch({type:"FETCHED",payload:response.data.products});
        }catch(error){
          console.log(error);
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