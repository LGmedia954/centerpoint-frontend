import { combineReducers } from 'redux'
import organizationForm from './organizationForm'
import currentUser from './currentUser'
import loginForm from './loginForm'
import myOrganizations from './myOrganizations'
import signupForm from './signupForm'
import organizations from './organizations'


const rootReducer = combineReducers({

  organizationForm: organizationForm,
  currentUser: currentUser,
  loginForm: loginForm,
  myOrganizations: myOrganizations,
  signupForm: signupForm,
  organizations: organizations

}); export default rootReducer