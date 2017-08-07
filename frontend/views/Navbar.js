import React, { Component } from 'react';
import { connect } from 'react-redux';

import { refreshUser } from '../actions/AuthActions'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var currRoute = this.props.history.location.pathname;
    console.log(this.props.history.location);
    console.log("currRoute", currRoute);
    if (currRoute === '/') {
      this.props.history.push('/profile/student/' + this.props.user.username);
    }
  }

  checkLoginState() {
    if (!this.props.user.username) {
      return <div></div>;
    } else {
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
              <div className="navbar-item has-dropdown is-hoverable">

              <a className="navbar-link  is-active" href="#" style={{textDecoration: 'none'}}>
              <figure className="image is-24x24">
                <img src="http://bulma.io/images/placeholders/128x128.png"/>
              </figure>
              </a>

              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="#">
                  Profile
                </a>
                <a className="navbar-item " href="#">
                  Logout
                </a>
              </div>

            </div>
          </div>
          </div>
        </div>
      )
    }
  }

  render() {
      return <div>
        {this.checkLoginState()}
      </div>
  }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      refreshUser: (id) => dispatch(refreshUser(dispatch, id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
