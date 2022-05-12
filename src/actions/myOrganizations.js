import { resetOrganizationForm } from './organizationForm'

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

export const allOrganizations = organizations => {
  return {
    type: "INDEX_ORGANIZATIONS",
    organizations
  }
}

export const fetchOrganizations = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/organizations", {
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

export const getMyOrganizations = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/mybiz", {
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

export const createOrganization = (organizationData, history) => {
  return dispatch => {
    const sendableOrganizationData = {
      name: organizationData.name,
      address: organizationData.address,
      suite: organizationData.suite,
      city: organizationData.city,
      state: organizationData.state,
      zip: organizationData.zip,
      phone: organizationData.phone,
      mission: organizationData.mission,
      website: organizationData.website,
      category_id: organizationData.categoryId,
      user_id: organizationData.userId
    }
    return fetch("http://localhost:3000/api/v1/organizations", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableOrganizationData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addOrganization(resp.data))
          dispatch(resetOrganizationForm())
          history.push(`/organizations/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const updateOrganization = (organizationData, history) => {
  return dispatch => {
    const sendableOrganizationData = {
      name: organizationData.name,
      address: organizationData.address,
      suite: organizationData.suite,
      city: organizationData.city,
      state: organizationData.state,
      zip: organizationData.zip,
      phone: organizationData.phone,
      mission: organizationData.mission,
      website: organizationData.website,
      category_id: organizationData.categoryId,
    }
    return fetch(`http://localhost:3000/api/v1/organizations/${organizationData.organizationId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableOrganizationData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateOrganizationSuccess(resp.data))
          history.push(`/organizations/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deleteOrganization = (organizationId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/organizations/${organizationId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteOrganizationSuccess(organizationId))
          history.push(`/organizations`)
        }
      })
      .catch(console.log)
  }
}