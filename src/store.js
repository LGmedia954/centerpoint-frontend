import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myOrganizations from './reducers/myOrganizations'
import organizations from './reducers/organizations'
import signupForm from './reducers/signupForm'
import bizForm from './reducers/bizForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  currentUser,
  loginForm,
  myOrganizations,
  organizations,
  signupForm,
  bizForm

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store