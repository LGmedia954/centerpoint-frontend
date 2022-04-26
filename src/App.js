import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import About from './components/About.js'
import MyOrganizations from './components/MyOrganizations.js'
import BizCard from './components/BizCard.js'
import Footer from './components/Footer.js'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, organizations } = this.props
    return (
      <div className="App">
        <Router>
          { loggedIn ? <NavBar organization={this.props.organization}/> : <Home/> }
          <Switch>
            <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/mybiz' component={MyOrganizations}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/organizations/:id' render={props => {
              const organization = organizations.find(organization => organization.id === props.match.params.id)
              console.log(organization)
              return <BizCard organization={organization} {...props}/>
            }
          }/>


          </Switch>
        </Router>
        <Footer />
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

// export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
export default connect(mapStateToProps, { getCurrentUser })(App);
