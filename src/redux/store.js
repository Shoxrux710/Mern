import {createStore, combineReducers} from 'redux'
import ProductsReducer from './reducers/ProductsReducer'
import userCartReducer from './reducers/userCartReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    Products: ProductsReducer,
    userCarts: userCartReducer
})

const store = createStore(rootReducer,  composeWithDevTools())

export default store




