import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { registerUser } from '../actions/AuthActions'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      repeatPassword: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.registerUser(username, password, repeatPassword);
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-wrapper">
        <h2>Register</h2>
            <p>Username</p>
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
            <p>Password</p>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            <p>Repeat Password</p>
            <input type="password" name="password" value={this.state.repeatPassword} onChange={(e) => this.setState({repeatPassword: e.target.value})}/>
            <button onClick={() => this.props.registerUser(this.state.username, this.state.password, this.state.repeatPassword)}>Register</button>
            <Link to='/register'>
              <button className="blue-button">Login</button>
            </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, repeatPassword) => dispatch(registerUser(dispatch, username, password, repeatPassword))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
