const initialState = {
  firstname: "",
  lastname: "",
  title: "",
  email: "",
  password: "",
}

const signupForm = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "RESET_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
};

export default signupForm;





// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "UPDATE_SIGNUP_FORM":
//       return action.formData
//     case "RESET_SIGNUP_FORM":
//       return initialState
//     default:
//       return state
//   }
// }