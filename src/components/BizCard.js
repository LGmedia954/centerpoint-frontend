// Business Card
import React from 'react'
import { Link } from 'react-router-dom'

const BizCard = ({ organization }) => {
  return (
    organization ?
      <div className='ui raised very padded text container segment'>
        <h3>{organization.attributes.name}</h3>
        <p>{organization.attributes.address}</p>
        <p>{organization.attributes.suite}</p>
        <p>{organization.attributes.city}</p>
        <p>{organization.attributes.state}</p>
        <p>{organization.attributes.zip}</p>
        <p>{organization.attributes.phone}</p>
        <p>{organization.attributes.website}</p>
        <br />
        <p>{organization.attributes.mission}</p>

        <Link to={`/organizations/${organization.id}/edit`} className="ui inverted teal button">Edit this organization</Link>
      </div> :
      <p>This is a lonely Business Card!</p>
  )
};

export default BizCard;