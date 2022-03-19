const wishlistReducer=(state,action)=>{

    switch(action.type){
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlist:[...action.payload],
                totalItems:action.payload.length
            };
        case "DELETE_FROM_WISHLIST":
            return{
                ...state,
                wishlist:[...action.payload],
                totalItems:action.payload.length
            }
        
        case "GET_WISHLIST":
            return state;
        default:
            return state;
    }
}

export {wishlistReducer};