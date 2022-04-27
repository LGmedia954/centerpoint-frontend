import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BizIndex = props => {
  const bizList = props.organizations.length > 0 ?
    props.organizations.map(org => (<p key={org.id}><Link to={`/organizations/${org.id}`}>{org.attributes.name}</Link></p>)) :
    null

  return bizList
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations
  }
}

export default connect(mapStateToProps)(BizIndex)