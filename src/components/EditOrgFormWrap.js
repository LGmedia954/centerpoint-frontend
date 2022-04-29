import React from 'react';
import OrganizationForm from './OrganizationForm'
import { updateOrganization, deleteOrganization } from '../actions/myOrganizations'
import { setFormDataForEdit, resetOrganizationForm } from '../actions/organizationForm'
import { connect } from 'react-redux'

class EditOrgFormWrap extends React.Component {
  componentDidMount(){
    this.props.organization && this.props.setFormDataForEdit(this.props.organization)
  }

  componentDidUpdate(prevProps) {
    this.props.organization && !prevProps.organization && this.props.setFormDataForEdit(this.props.organization)
  }

  componentWillUnmount() {
    this.props.resetOrganizationForm()
  }

  handleSubmit = (formData) => {
    const { updateOrganization, organization, history } = this.props
    updateOrganization({
      ...formData,
      organizationId: organization.id
    }, history)
  }

  render() {
    const { history, deleteOrganization, organization } = this.props
    const organizationId = organization ? organization.id : null
    return  <>
              <OrganizationForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button class="ui inverted red button" onClick={()=>deleteOrganization(organizationId, history)}>Delete this organization</button>
            </>
  }
};

export default connect(null, { updateOrganization, setFormDataForEdit, resetOrganizationForm, deleteOrganization })(EditOrgFormWrap);