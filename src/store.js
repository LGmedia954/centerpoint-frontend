import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import users from './users';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myOrganizations from './reducers/myOrganizations';
import signupForm from './reducers/signupForm';
import organizationForm from './reducers/organizationForm';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const reducer = combineReducers({

  currentUser,
  loginForm,
  myOrganizations,
  signupForm,
  organizationForm

})

const store = configureStore({reducer: reducer}, composeWithDevTools(applyMiddleware(thunk)))

export default store;





// // import { createStore, applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers/rootReducer'


// // const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = configureStore({reducer:rootReducer}, applyMiddleware(thunk))

// export default store