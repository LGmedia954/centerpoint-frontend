import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';


const NavBar = ({ currentUser, loggedIn }) => {
  // debugger
  return (
    <div className="nav">
    <h2>CenterPoint Business Hub</h2>
      <NavLink to="/about" exact activeClassName="active" >About | </NavLink>
      <NavLink to="/organizations" exact activeClassName="active" >Business Directory | </NavLink>
      <NavLink to="/mybiz" exact activeClassName="active" >My Organizations <br /></NavLink>
      <NavLink to="/organizations/new" exact activeClassName="active" >Add an Organization | </NavLink>
      <NavLink to="/announcements" exact activeClassName="active" >Announcements | </NavLink>
      <NavLink to="/invite" exact activeClassName="active" >Events | </NavLink>
      <NavLink to="/contact" exact activeClassName="active" >Contact</NavLink><br />
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

export default connect(mapStateToProps)(NavBar);