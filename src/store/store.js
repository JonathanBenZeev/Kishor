import { createStore, combineReducers } from 'redux'

import { userReducer } from './user.reducer.js'
import { stayReducer } from './stay.reducer.js'


const rootReducer = combineReducers({
  userModule: userReducer,
  stayModule: stayReducer,

})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined
export const store = createStore(rootReducer, middleware)
