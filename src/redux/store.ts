import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import reducer from './reducers/index'
import thunk from 'redux-thunk'

// import rootReducer from './root-reducer'

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(reducer, {}, applyMiddleware(thunk))

