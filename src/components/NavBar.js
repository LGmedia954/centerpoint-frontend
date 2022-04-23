import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink>About</NavLink>
      <NavLink exact activeClassName="active" to="/organizations" >My Organizations</NavLink>
      <NavLink exact activeClassName="active" to="/organizations/new" >Add an Organization</NavLink>
      <NavLink>Business Directory</NavLink>
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