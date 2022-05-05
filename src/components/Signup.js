import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserDataEntry = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="firstname" value={signupFormData.firstname} name="firstname" type="text" onChange={handleUserDataEntry} /><br /><br />
      <input placeholder="lastname" value={signupFormData.lastname} name="lastname" type="text" onChange={handleUserDataEntry} /><br /><br />
      <input placeholder="title" value={signupFormData.title} name="title" type="text" onChange={handleUserDataEntry} /><br /><br />
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserDataEntry} /><br /><br />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserDataEntry} /><br /><br />
      <input className="ui inverted teal button" type="submit" value="Sign Up"/>
    </form>
  )
};

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
};

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup);