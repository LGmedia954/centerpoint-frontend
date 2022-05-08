import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BizIndex = ({ organizations }) => {
  // console.log(props.organizations);
  return(
    <div className="paracenter">
      <h2 className="oomph">Organizations</h2>
      {
        organizations.map(organization => {
          return(
						<div className='ui raised very padded text container segment'
							key={organization.id}
			      >
              <Link to={`/${organization.name}`} className='ui header'>{organization.name}</Link>
			      </div>
					)
				})
			}
    </div>
  )
};

const mapStateToProps = (state) => {
	return {
		organizations: state.organizations
	};
};

export default connect((mapStateToProps)(BizIndex));