const initialState = {
  name: "",
  address: "",
  suite: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  website: "",
  mission: "",
}

// const organizationForm = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPDATE_NEW_ORGANIZATION_FORM":
//       const returnVal = {
//         ...state,
//         [action.formData.name]: action.formData.value
//       }
//       return returnVal
//     case "RESET_NEW_ORGANIZATION_FORM":
//       return initialState
//     case "SET_FORM_DATA_FOR_EDIT":
//       return action.organizationFormData
//     default:
//       return state
//   }
// }

// export default organizationForm;



export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_ORGANIZATION_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_ORGANIZATION_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.organizationFormData
    default:
      return state
  }
}