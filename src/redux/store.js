import { createStore, applyMiddleware } from 'redux'

//logger middleware
//to monitor reducer actions and show it to the console
import logger from 'redux-logger'

import rootReducer from './root.reducer'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store

