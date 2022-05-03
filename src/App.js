import React from 'react';
import { connect } from 'react-redux';
// import { Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import CenterStage from './containers/CenterStage'
import MyOrganizations from './components/MyOrganizations.js'
import MainDirectory from './containers/MainDirectory'
import BizIndex from './components/BizIndex.js'
import BizCard from './components/BizCard.js'
import NewOrgFormWrap from './components/NewOrgFormWrap.js'
import EditOrgFormWrap from './components/EditOrgFormWrap.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'


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
            <Route exact path='/organizations/mybiz' component={MyOrganizations}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/organizations/new' component={NewOrgFormWrap}/>
            <Route exact path='/organizations/index' component={BizIndex}/>
            <Route exact path='/organizations/:id' render={props => {
              const organization = organizations.find(organization => organization.id === props.match.params.id)
              // console.log(organization)
              return <BizCard organization={organization} {...props}/>
            }
          }/>
            <Route exact path='/organizations/:id/edit' render={props => {
              const organization = organizations.find(organization => organization.id === props.match.params.id)
              return <EditOrgFormWrap organization={organization} {...props}/>
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
    loggedIn: !!state.currentUser,
    organizations: state.myOrganizations
  })
}

// export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
export default connect(mapStateToProps, { getCurrentUser })(App);
