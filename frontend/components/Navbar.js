import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar' style={{height: '50px'}}>
        <div className="navbar-menu" style={{boxShadow: '0px 2px 4px rgba(219, 219, 219, 51)'}}>
          <div className="navbar-end" style={{display:'flex', justifyContent: 'flex-end'}}>
            <a className="navbar-item" href="#" style={{textDecoration: 'none'}}>
              Home
            </a>
            <a className="navbar-item" href="#" style={{textDecoration: 'none'}}>
              Discover
            </a>
            <a className="navbar-item" href="#" style={{textDecoration: 'none'}}>
              <figure className="image is-16x16">
                <img src="http://bulma.io/images/placeholders/128x128.png"/>
              </figure>
            </a>

          </div>
        </div>
      </div>


    )
  }
}

export default Navbar;
