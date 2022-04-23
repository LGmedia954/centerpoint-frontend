export const updateOrganizationForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_ORGANIZATION_FORM",
    formData
  }
}

export const resetOrganizationForm = () => {
  return {
    type: "RESET_NEW_ORGANIZATION_FORM",
  }
}

export const setFormDataForEdit = organization => {
  const organizationFormData = {
    name: organization.attributes.name,
    address: organization.attributes.address,
    suite: organization.attributes.suite,
    city: organization.attributes.city,
    state: organization.attributes.state,
    zip: organization.attributes.zip,
    phone: organization.attributes.phone,
    website: organization.attributes.website,
    mission: organization.attributes.mission
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    organizationFormData
  }
}