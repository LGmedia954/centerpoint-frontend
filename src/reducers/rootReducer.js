import { combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import currentUser from './currentUser'
import loginForm from './loginForm'
import signupForm from './signupForm'
import organizationForm from './organizationForm'
import myOrganizations from './myOrganizations'
import organizations from './organizations'


const rootReducer = combineReducers({

  currentUser,
  loginForm,
  myOrganizations,
  organizations,
  signupForm,
  organizationForm

})

export default rootReducer