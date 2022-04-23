import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import About from './About'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink to="/about" exact activeClassName="active" >About</NavLink>
      <NavLink to="/organizations" exact activeClassName="active" >My Organizations</NavLink>
      <NavLink to="/organizations/new" exact activeClassName="active" >Add an Organization</NavLink>
      <NavLink to="" exact activeClassName="active" >Business Directory</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.firstname}</p><Logout/></> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)