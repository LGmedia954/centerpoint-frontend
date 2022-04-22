import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="Home">
    <h1>Welcome to CenterPoint Business Hub</h1>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </div>

);

export default Home;