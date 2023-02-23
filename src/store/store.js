import { createStore, combineReducers } from 'redux'

import { userReducer } from './user.reducer.js'
import { stayReducer } from './stay.reducer.js'
import { orderReducer } from './order.reducer.js'


const rootReducer = combineReducers({
  userModule: userReducer,
  stayModule: stayReducer,
  orderModule: orderReducer,

})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined
export const store = createStore(rootReducer, middleware)
