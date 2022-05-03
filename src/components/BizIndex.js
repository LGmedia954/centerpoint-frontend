import React from 'react'
import BizCard from './BizCard'

const BizIndex = ({ organizations }) => {

  return(
    <div className="paracenter">
      {organizations.map(organization =>
        <BizCard
          key={organization.id}
          id={organization.id}
          name={organization.name}
          phone={organization.phone}
          website={organization.attributes.website}
        />
      )}
    </div>
  )
}

export default BizIndex