import React, { Component } from 'react';
import { connect } from 'react-redux';

import { refreshUser, logoutUser } from '../actions/AuthActions'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var currRoute = this.props.history.location.pathname;
    if (currRoute === '/') {
      console.log('here');
      this.props.history.push('/profile/company/' + this.props.user._id);
    }
  }

  checkLoginState() {
    if (!this.props.user.username) {
      return <div></div>;
    } else {
      return (
        <div className='navbar' style={{height: '50px'}}>
          <div className="navbar-menu" style={{boxShadow: '0px 2px 4px rgba(219, 219, 219, 51)'}}>
            <div className="navbar-brand">
              <img className="navbar-item" src="https://s3-us-west-2.amazonaws.com/mirathon/Logo.png" style={{height: '50px'}}></img>
            </div>
            <div className="navbar-end" style={{display:'flex', justifyContent: 'flex-end'}}>
              <a className="navbar-item" style={{textDecoration: 'none'}} onClick={() => this.props.history.push('/profile/company/' + this.props.user._id)}>
                Home
              </a>
              <a className="navbar-item" style={{textDecoration: 'none'}} onClick={() => {this.props.logoutUser(); this.props.history.push('/')}}>
                Logout
              </a>
              <div className="navbar-item" >
                <figure className="image is-24x24">
                  <img src={this.props.user.image}/>
                </figure>

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
      refreshUser: (id) => dispatch(refreshUser(dispatch, id)),
      logoutUser: () => dispatch(logoutUser(dispatch))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
