import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to your user profile!</h1>
        <h2>Click the link below to go to the home.</h2>
        <p><Link to="/">Home</Link></p>
      </div>
    )
  }
};

export default UserProfile;
