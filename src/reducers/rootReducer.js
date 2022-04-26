import { combineReducers } from 'redux'
import bizForm from './bizForm'
import currentUser from './currentUser'
import loginForm from './loginForm'
import myOrganizations from './myOrganizations'
import signupForm from './signupForm'
import organizations from './organizations'


const rootReducer = combineReducers({

  bizForm: bizForm,
  currentUser: currentUser,
  loginForm: loginForm,
  myOrganizations: myOrganizations,
  signupForm: signupForm,
  organizations: organizations

});

export default rootReducer