import React from 'react'
import BizCard from './BizCard'

const BizIndex = ({ organizations }) => {

  const bizList = organizations.map(org => <BizCard organization={org} key={org.id}/>)
  return (
    <div className="parafix">
      { bizList }
    </div>
  )
}

export default BizIndex;