import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerStudent } from '../actions/AuthActions'

class StudentRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      university: 'University of Pennsylvania',
      year: '2018',
      major: 'Anthropology',
      about: ''
    }
  }

  submit() {
    const { username, password, repeatPassword, email, fname, lname, university, year, major } = this.state;
    this.props.registerStudent(username, password, repeatPassword, email, fname, lname, university, year, major);
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="login-wrapper">
          <h2>Student Registration</h2>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name="username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
            </div>
          </div>

          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" type="text" name="fname" value={this.state.fname}
                onChange={(e) => this.setState({fname: e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" name="lname" value={this.state.lname}
                onChange={(e) => this.setState({lname: e.target.value})}/>
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
            <label className="label">About</label>
            <div className="control">
              <input className="input" type="text" name="about" value={this.state.about} placeholder='one liner about yourself'
                onChange={(e) => this.setState({about: e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">University</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState({university: e.target.value})}>
                  <option>University of Pennsylvania</option>
                  <option>University of California – Berkeley</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Year</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState({year: e.target.value})}>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Major</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState({major: e.target.value})}>
                  <option>Anthropology</option>
                  <option>Computer Science</option>
                  <option>Math</option>
                  <option>Earth Science</option>
                </select>
              </div>
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
    registerStudent: (username, password, repeatPassword, email, fname, lname, university, year, major, about) => dispatch(registerStudent(dispatch, username, password, repeatPassword, email, fname, lname, university, year, major, about))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegister);
