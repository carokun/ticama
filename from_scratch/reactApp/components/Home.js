import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to our home page!</h1>
        <h2>Click the link below to go to the your user profile.</h2>
        <p><Link to="/userProfile">User Profile</Link></p>
      </div>
    )
  }
};

export default Home;
