

const cartReducer = (state,action)=>{

    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...action.payload],
                totalPrice:action.payload.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,''))*curr.qty,0),
                totalItems:action.payload.reduce((acc,curr)=>acc+curr.qty,0),
                discount:0,
                orderSuccess:false,
            };
        case "GET_CART":
            return state;

        case "UPDATE_CART":
            return {
                ...state,
                cart:[...action.payload],
                totalPrice:action.payload.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,''))*curr.qty,0),
                totalItems:action.payload.reduce((acc,curr)=>acc+curr.qty,0),
                discount:0,
            }
        case "CLEAR_CART":
            return{
                ...state,
                cart:[],
                totalPrice:0,
                totalItems:0,
                discount:0,
                orderSuccess:false,
            }
        case "DISCOUNT":
            return{
                ...state,
                discount:Number(action.payload)
            }
        case "ORDER_SUCCESS":
            return{
                ...state,
                orderSuccess:true,
            }
        

        default:
            return state;
    }
}

export {cartReducer};