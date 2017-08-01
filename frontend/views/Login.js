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

  onSubmit(event) {
    event.preventDefault();
    this.props.loginUser(username, password);
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-wrapper">
        <h2>Login</h2>
          <form action="/login" method="post" onSubmit={(event) => this.onSubmit(event)}>
            <p>Username</p>
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
            <p>Password</p>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            <button className="green-button" type="submit" value="Log In">Login</button>
            <Link to='/register'>
              <button className="blue-button">Register</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(dispatch, username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
