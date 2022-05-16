import React from 'react';
import OrganizationForm from './OrganizationForm';
import { createOrganization } from '../actions/myOrganizations';
import { connect } from 'react-redux';

const NewOrgFormWrap = ({ history, createOrganization }) => {

  const handleSubmit = (formData, userId) => {
    createOrganization({
      ...formData,
      userId
    }, history)
  }
  return  <OrganizationForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createOrganization })(NewOrgFormWrap);