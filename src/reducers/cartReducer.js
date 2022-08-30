const initialData={
    cartitems : []
}


const cartReducer = (state = initialData, action)=>{
    switch(action.type){
        case "ADD_CART": return{
            ...state,
            cartitems: [...state.cartitems, action.payload]
        }

        case "DELETE_CART": return{
            ...state,
            cartitems: state.cartitems.filter((cart)=>cart !== action.payload)
        }

        default: {
            return state
        }
    }
}

export default cartReducer