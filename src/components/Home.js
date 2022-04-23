import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="Home">
    <h1>CenterPoint Business Hub</h1>
    <br />
      <h3>
        <Link to="/signup" className="baselink">Sign Up</Link> or <Link to="/login" className="baselink">Log In</Link>
      </h3>
    <br />
  </div>

);

export default Home;