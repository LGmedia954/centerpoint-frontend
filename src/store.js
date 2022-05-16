// import { createStore, applyMiddleware } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({reducer:rootReducer}, composeWithDevTools(applyMiddleware(thunk)));

export default store;