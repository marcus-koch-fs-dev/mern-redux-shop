import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { cartReducer } from './reducer/cartReducers'
import {
  getProductsReducers,
  getProductDetailsReducer,
} from './reducer/productReducers'
import { userLoginReducer } from './reducer/userReducers'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducers,
  getProductDetails: getProductDetailsReducer,
  userLogin: userLoginReducer,
})

// helps to make async in our actions
const middleware = [thunk]

const cartFromLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
