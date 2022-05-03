const initialState = []

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case "INDEX_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
}

export default organizations;





// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "INDEX_ORGANIZATIONS":
//       return action.organizations
//     default:
//       return state
//   }
// }