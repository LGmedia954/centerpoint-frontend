export const allOrganizations = organizations => {
  return {
    type: "INDEX_ORGANIZATIONS",
    organizations
  }
}

export const fetchOrganizations = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/organizations/index", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(allOrganizations(response.data))
        }
      })
      .catch(console.log)
  }
}