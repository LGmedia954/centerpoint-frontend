import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import CenterStage from './containers/CenterStage';
import DirectoryContainer from './containers/DirectoryContainer';
import BizCard from './components/BizCard.js';
import NewOrgFormWrap from './components/NewOrgFormWrap.js';
import EditOrgFormWrap from './components/EditOrgFormWrap.js';
import About from './components/About.js';
import News from './containers/News.js';
import InviteContainer from './containers/InviteContainer.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
// import { Route, Switch, withRouter } from 'react-router-dom';
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
            <Route exact path='/organizations/mybiz' container={CenterStage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/announcements' component={News}/>
            <Route exact path='/events' container={InviteContainer}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/organizations/new' component={NewOrgFormWrap}/>
            <Route exact path='/organizations' container={DirectoryContainer}/>
            <Route exact path='/organizations/:id' render={props => {
              const organization = organizations.find(organization => organization.id === props.match.params.id)
              console.log(organization)
              return <BizCard organization={organization} {...props}/>
            }
          }/>
            <Route exact path='/organizations/:id/edit' render={props => {
              const organization = organizations.find(organization => organization.id === props.match.params.id)
              return <EditOrgFormWrap organization={organization} {...props}/>
            }
          }/>
          </Switch>
         <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    organizations: state.organizations || state.myOrganizations
  };
};

// export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
export default connect(mapStateToProps, { getCurrentUser })(App);