export const setMyOrganizations = organizations => {
  return {
    type: "SET_MY_ORGANIZATIONS",
    organizations
  }
}

export const clearOrganizations = () => {
  return {
    type: "CLEAR_ORGANIZATIONS"
  }
}

export const addOrganization = organization => {
  return {
    type: "ADD_ORGANIZATION",
    organization
  }
}

export const deleteOrganizationSuccess = organizationId => {
  return {
    type: "DELETE_ORGANIZATION",
    organizationId
  }
}

export const updateOrganizationSuccess = organization => {
  return {
    type: "UPDATE_ORGANIZATION",
    organization
  }
}

export const getMyOrganizations = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/organizations", {
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
          dispatch(setMyOrganizations(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createOrganization = (orgData, history) => {
  return dispatch => {
    const sendableOrgData = {
      name: orgData.name,
      address: orgData.address,
      suite: orgData.suite,
      city: orgData.city,
      state: orgData.state,
      zip: orgData.zip,
      phone: orgData.phone,
      mission: orgData.mission,
      website: orgData.website,
      category_id: orgData.categoryId,
      user_id: orgData.userId
    }
    return fetch("http://localhost:3001/api/v1/organizations", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableOrgData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addOrganization(resp.data))
          // dispatch(resetOrganizationForm())
          history.push(`/organizations/${resp.data.id}`)
          // show the Org
        }
      })
      .catch(console.log)
  }
}