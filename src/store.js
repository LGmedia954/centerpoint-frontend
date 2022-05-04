// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({reducer:rootReducer}, applyMiddleware(thunk))

export default store