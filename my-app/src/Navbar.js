import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="nav">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/UserProfile">UserProfile</Link></div>
        </Navbar>
      </div>
    )
  }
};

export default NavBar;
