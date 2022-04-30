const initialState = []

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INDEX_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
};

export default organizationsReducer;





// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "INDEX_ORGANIZATIONS":
//       return action.organizations
//     default:
//       return state
//   }
// }