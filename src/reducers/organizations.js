const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "INDEX_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
}