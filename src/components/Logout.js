import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
// import { withRouter } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Logout = ({ logout, history }) => {
  return (
    <div className="bye">
    <Router>
      <form onSubmit={(event) => {
          event.preventDefault()
          logout()
          history.push('/')
        }
      }>
        <input className="ui inverted teal button" type="submit" value="Log Out"/>
      </form>
    </Router>
    </div>
  )
};

// export default withRouter(connect(null, { logout } )(Logout))
export default Route(connect((null, { logout })(Logout)));

