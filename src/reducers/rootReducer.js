import { combineReducers } from 'redux';
// import users from './users';
import currentUser from './currentUser';
import loginForm from './loginForm';
import myOrganizations from './myOrganizations';
import signupForm from './signupForm';
import organizationForm from './organizationForm';


const rootReducer = combineReducers({

  currentUser,
  loginForm,
  myOrganizations,
  signupForm,
  organizationForm

});

export default rootReducer;