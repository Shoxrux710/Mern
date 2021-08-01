import { APP_PRODUCT, REMOVE_FROM_CART_TO, USER_CART,HISTORY_REMOVE, LOGIN_USER } from './types'
// import axios from 'axios'


export const productApp = (product) => {

    return {
        type: APP_PRODUCT,
        payload: product
    }
}
export const removeFromCart_to = (itemID) => {

    return {
        type: REMOVE_FROM_CART_TO,
        payload: {
            id: itemID
        }
    }
}

export const userCart = (items) => {

    return {
        type: USER_CART,
        payload: items
    }
}
export const HistoryCart = (items) => {

    return {
        type: HISTORY_REMOVE,
        payload: {
            id: items
        }
    }
}
export const loginUser = (items) => {

    return {
        type: LOGIN_USER,
        payload: items
    }
}



// export const sortProducts = (filteredProducts, sort)  => {
//     console.log(sort);
//     const sortedProducts = filteredProducts.slice()
//     if (sort === "latest") {
//         sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
//       } else {
//         sortedProducts.sort((a, b) =>
//           sort === "lowest"
//             ? a.price > b.price
//               ? 1
//               : -1
//             : a.price < b.price
//             ? -1
//             : 1
//         );
//       }
//     return {
//         type: ORDER_PRODUCTS_BY_PRICE,
//         payload: {
//             sort: sort,
//             items: sortedProducts
//         }
//     }
// }