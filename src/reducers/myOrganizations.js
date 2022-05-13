const myOrganizations = (state={}, action) => {
  switch (action.type) {
    case "SET_MY_ORGANIZATIONS":
      return action.organizations
    case "ADD_ORGANIZATION":
      return state.concat(action.organization)
    case "UPDATE_ORGANIZATION":
      return state.map(organization => organization.id === action.organization.id ? action.organization : organization)
    case "DELETE_ORGANIZATION":
      return state.filter(organization => organization.id === action.organizationId ? false : true)
    case "CLEAR_ORGANIZATIONS":
      return state={}
    case "INDEX_ORGANIZATIONS":
      return {
        ...state,
        random: action.payload
      }
    default:
      return state
  }
}

export default myOrganizations;







// const initialState = []

// const myOrganizations = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_MY_ORGANIZATIONS":
//       return action.organizations
//     case "ADD_ORGANIZATION":
//       return state.concat(action.organization)
//     case "UPDATE_ORGANIZATION":
//       return state.map(organization => organization.id === action.organization.id ? action.organization : organization)
//     case "DELETE_ORGANIZATION":
//       return state.filter(organization => organization.id === action.organizationId ? false : true)
//     case "CLEAR_ORGANIZATIONS":
//       return initialState
//     case "INDEX_ORGANIZATIONS":
//       return action.organizations
//     default:
//       return state
//   }
// }

// export default myOrganizations;



// const initialState = {
//   organizations: []
// };



// const initialState = []

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_MY_ORGANIZATIONS":
//       return action.organizations
//     case "ADD_ORGANIZATION":
//       return state.concat(action.organization)
//     case "UPDATE_ORGANIZATION":
//       return state.map(organization => organization.id === action.organization.id ? action.organization : organization)
//     case "DELETE_ORGANIZATION":
//       return state.filter(organization => organization.id === action.organizationId ? false : true)
//     case "CLEAR_ORGANIZATIONS":
//       return initialState
//     default:
//       return state
//   }
// }