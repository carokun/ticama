import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const container = {
      backgroundColor: 'white',
      fontFamily: 'Raleway',
      boxShadow: '0px 4px 2px -2px rgba(219, 219, 219, 51)',
      height: '50px'
    }
    const linkBox = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
    const links = {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Raleway',
      fontColor: '#737373',
      textDecoration: 'none',
      marginTop: '15px',
      marginLeft: '15px',
      marginRight: '15px'
    }
    return (
      <div>
          <div style={container}>
            <div style={linkBox}>
              <Link style={links} to="/">HOME</Link>
              <Link style={links} to="/">DISCOVER</Link>
              <Link style={links} to="/UserProfile">PROFILE</Link>
            </div>
          </div>
      </div>
    )
  }
};

export default NavBar;
