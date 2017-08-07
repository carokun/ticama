import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../actions/AuthActions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    console.log(this.props.user);
    if (this.props.user._id) {
      this.props.history.push('/profile/student/' + this.props.user.username);
    }
    return (
      <div className="login-page">
        <div className="login-wrapper">
          <h2>Login</h2>
          <p>Username</p>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
          <p>Password</p>
          <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
          <button onClick={() => this.props.loginUser(this.state.username, this.state.password)}>Login</button>
          <Link to='/register'>
          <button className="blue-button">Register</button>
          </Link>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(dispatch, username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
