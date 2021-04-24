import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { cartReducers } from './reducer/cartReducers'
import {
  getProductsReducers,
  getProductDetailsReducer,
} from './reducer/productReducers'

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducers,
  getProductDetails: getProductDetailsReducer,
})

// helps to make async in our actions
const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
