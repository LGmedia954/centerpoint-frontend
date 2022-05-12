import { combineReducers } from 'redux';
// import usersReducer from './users';
import currentUser from './currentUser';
import loginForm from './loginForm';
import myOrganizations from './myOrganizations';
import signupForm from './signupForm';
import organizationForm from './organizationForm';
import organizations from './organizations';


const rootReducer = combineReducers({

  currentUser,
  loginForm,
  myOrganizations,
  signupForm,
  organizationForm,
  organizations

});

export default rootReducer;