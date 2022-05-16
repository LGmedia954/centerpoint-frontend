import React from 'react';
import { Link } from 'react-router-dom';
import LongIsland from './LongIsland';


const Home = () => (
  <div className="Home">
    <div className="header">
    <h1>CenterPoint Business Hub</h1>
    </div><br /><br /><br />
      <h3>
        <Link to="/signup" className="baselink">Sign Up</Link> or <Link to="/login" className="baselink">Log In</Link>
      </h3><br />
      <LongIsland />
    </div>

);

export default Home;