import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyOrganizations = props => {
  const bizCards = props.user.organizations.length > 0 ?
    props.user.organizations.map(org => (<p key={org.id}><Link to={`/organizations/${org.id}`}>{org.attributes.name}</Link></p>)) :
    null

  return bizCards
};

const mapStateToProps = state => {
  return {
    organizations: state.myOrganizations
  }
}

export default connect((mapStateToProps)(MyOrganizations));