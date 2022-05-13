const currentUser = (state={}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.user
      }
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
}

export default currentUser;



// const currentUser = (state={}, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//       return {
//         ...state,
//         random: action.payload
//       }
//     case "CLEAR_CURRENT_USER":
//       return null
//     default:
//       return state
//   }
// }

// export default currentUser;


// export default (state = null, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//       return action.user
//     case "CLEAR_CURRENT_USER":
//       return null
//     default:
//       return state
//   }
// }