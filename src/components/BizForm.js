import React from 'react';
import { updateOrganizationForm } from '../actions/bizForm'
import { connect } from 'react-redux'

const BizForm = ({ formData, updateOrganizationForm, userId, organization, handleSubmit, editMode }) => {

  const { name, address, suite, city, state, zip, phone, website, mission } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateOrganizationForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
      <input placeholder="address" name="address" onChange={handleChange} value={address}/><br/>
      <input placeholder="suite" name="suite" onChange={handleChange} value={suite}/><br/>
      <input placeholder="city" name="city" onChange={handleChange} value={city}/><br/>
      <input placeholder="state" name="state" onChange={handleChange} value={state}/><br/>
      <input placeholder="zip" name="zip" onChange={handleChange} value={zip}/><br/>
      <input placeholder="phone" name="phone" onChange={handleChange} value={phone}/><br/>
      <input placeholder="website" name="website" onChange={handleChange}value={website}/><br/>
      <input placeholder="mission" name="mission" onChange={handleChange} value={mission}/><br/>
      <input className="ui inverted teal button" type="submit" value={editMode ? "Update Organization" : "Create Organization" }/>
    </form>
  )};

  const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.bizForm,
      userId
    }
  }
  
  export default connect(mapStateToProps, { updateOrganizationForm })(BizForm);