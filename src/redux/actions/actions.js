import {ADD_TO_CART, REMOVE_FROM_CART, ADD_CART, REMOVE_CART} from './types'



export const addToCart = (itemID) => {

    return {
        type: ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}
export const removeFromCart = (itemID) => {

    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}
export const addQty = ( itemID, value) => {

    return {
        type: ADD_CART,
        payload: {
            id: itemID,
            qty: value
        }
    }
}
export const removeQty = ( itemID, value) => {

    return {
        type: REMOVE_CART,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

