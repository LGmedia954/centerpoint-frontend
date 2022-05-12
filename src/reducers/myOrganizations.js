const initialState = []

// const initialState = {
//   organizations: []
// };

const myOrganizations = (state = initialState, action) => {
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
      return initialState
    case "INDEX_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
}

export default myOrganizations;



// = (state = initialState, action) => {
// = (state = null, action) => {



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