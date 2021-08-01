import {
    ADD_TO_CART, REMOVE_FROM_CART, ADD_CART, REMOVE_CART,
    APP_PRODUCT, REMOVE_FROM_CART_TO
} from '../actions/types'

const initState = {

    products: [],
    cart: []
}



const ProductsReducer = (state = initState, action) => {

    switch (action.type) {

        case APP_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:

            const item = state.products.find(prod => prod._id === action.payload.id)
            const inCart = state.cart.find(item => item._id === action.payload.id ? true : false)

            return {
                ...state,

                cart: inCart ? state.cart.map(item => item._id === action.payload.id ?
                    { ...item, qty: item.qty + 1 } : item) : [
                    ...state.cart, { ...item, qty: 1 }
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload.id)
            }
        case REMOVE_FROM_CART_TO:
            return {
                ...state,
                products: state.products.filter(item => item._id !== action.payload.id)
            }
        case ADD_CART:

            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ?
                    { ...item, qty: action.payload.qty + 1 } : item)
            }
        case REMOVE_CART:

            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ?
                    { ...item, qty: action.payload.qty > 1 ? action.payload.qty - 1 : action.payload.qty } : item),
            }


        default:
            return state
    }

}

export default ProductsReducer