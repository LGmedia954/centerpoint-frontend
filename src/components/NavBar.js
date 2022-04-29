import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
    <h2>CenterPoint Business Hub</h2>
      <NavLink to="/organizations/index" exact activeClassName="active" >Business Directory | </NavLink>
      <NavLink to="/about" exact activeClassName="active" >About | </NavLink>
      <NavLink to="/organizations/mybiz" exact activeClassName="active" >My Organizations | </NavLink>
      <NavLink to="/organizations/new" exact activeClassName="active" >Add an Organization </NavLink><br />
      <NavLink to="/announcements" exact activeClassName="active" >Announcements | </NavLink>
      <NavLink to="/announcements/new" exact activeClassName="active" >Add an Announcement | </NavLink>
      <NavLink to="/contact" exact activeClassName="active" >Contact | </NavLink>
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