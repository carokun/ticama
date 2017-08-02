import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerClub } from '../actions/AuthActions'

class ClubRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      about: ''
    }
  }

  submit() {
    const { username, password, repeatPassword, email, name, about, website } = this.state;
    this.props.registerClub(username, password, repeatPassword, email, name, about, website);
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="login-wrapper">
          <h2>Club Registration</h2>

          <div className="field">
            <label className="label">Userame</label>
            <div className="control">
              <input className="input" type="text" name="username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
            </div>
            <p className="help">For simple login purposes.</p>
          </div>

          <div className="field">
            <label className="label">Club Name</label>
            <div className="control">
              <input className="input" type="text" name="clubName" value={this.state.clubName}
                onChange={(e) => this.setState({clubName: e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <input className="input" type="email" placeholder="e.g. charliebrown@gmail.com" name="email"
                value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
              <input className="input" type="password" name="password"
                value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
              <input className="input" type="password" name="repeatPassword"
                value={this.state.repeatPassword} onChange={(e) => this.setState({repeatPassword: e.target.value})}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Website</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fa fa-link"></i>
              </span>
              <input className="input" type="text" placeholder="http://www.ticama.com" name="website"
                value={this.state.website} onChange={(e) => this.setState({website: e.target.value})}/>
            </div>
          </div>

          <div className="field">
            <label className="label">About</label>
            <div className="control">
              <textarea className="textarea" placeholder="e.g. We promote social good in communities."></textarea>
            </div>
          </div>

          <button className="button is-primary" onClick={() => this.submit()}>Register</button>

          <Link to='/'>
            <button className="button is-primary">Login</button>
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
    registerClub: (username, password, repeatPassword, email, name, about, website) => dispatch(registerClub(dispatch, username, password, repeatPassword, email, name, about, website))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubRegister);
