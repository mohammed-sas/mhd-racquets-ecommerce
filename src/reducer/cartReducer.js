

const cartReducer = (state,action)=>{

    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...action.payload],
                totalPrice:action.payload.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,''))*curr.qty,0),
                totalItems:action.payload.reduce((acc,curr)=>acc+curr.qty,0)
            };
        case "GET_CART":
            return state;

        case "UPDATE_CART":
            return {
                ...state,
                cart:[...action.payload],
                totalPrice:action.payload.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,''))*curr.qty,0),
                totalItems:action.payload.reduce((acc,curr)=>acc+curr.qty,0)
            }
            
        

        default:
            return state;
    }
}

export {cartReducer};