import React from 'react';
import BizForm from './BizForm'
import { createOrganization } from '../actions/myOrganizations'
import { connect } from 'react-redux'

const NewBizFormWrap = ({ history, createOrganization }) => {

  const handleSubmit = (formData, userId) => {
    createOrganization({
      ...formData,
      userId
    }, history)
  }
  return  <BizForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createOrganization })(NewBizFormWrap);