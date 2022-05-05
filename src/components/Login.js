import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" value={loginFormData.email} name="email" type="text" onChange={handleInputChange} /><br /><br />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /><br /><br />
      <input className="ui inverted teal button" type="submit" value="Log In"/>
    </form>
  )
};

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
};

export default connect(mapStateToProps, { updateLoginForm, login } )(Login);