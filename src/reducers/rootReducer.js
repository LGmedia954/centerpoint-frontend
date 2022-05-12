import { combineReducers } from 'redux';
import currentUser from './currentUser';
import loginForm from './loginForm';
import myOrganizations from './myOrganizations';
import organizationForm from './organizationForm';
import signupForm from './signupForm';
// import users from './users';


const rootReducer = combineReducers({

  currentUser,
  loginForm,
  myOrganizations,
  organizationForm,
  signupForm

});

export default rootReducer;