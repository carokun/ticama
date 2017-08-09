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
    return (
      <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '17%', flexDirection: 'column', width: '400px'}}>
          <h2 className="title is-1">Login</h2>
          <p>Username</p>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
          <p>Password</p>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <button className="button is-info" onClick={() => this.props.loginUser(this.state.username, this.state.password)}>Login</button>
            <div style={{width: '10px', height: '1px'}}></div>
            <Link to='/register'>
              <button className="button is-danger">Register</button>
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
