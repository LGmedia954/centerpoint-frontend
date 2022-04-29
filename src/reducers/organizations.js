const initialState = []

const exportOrganizations = (state = initialState, action) => {
  switch (action.type) {
    case "INDEX_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
}; exportOrganizations();