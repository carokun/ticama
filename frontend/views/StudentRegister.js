import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/AuthActions'

class StudentRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      university: '',
      year: '',
      major: ''
    }
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="login-wrapper">
          <h2>Student Registration</h2>

          <div className="field">
            <label className="label">Userame</label>
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
              <input className="input" type="password" name="password2"
                value={this.state.password2} onChange={(e) => this.setState({password2: e.target.value})}/>
            </div>
          </div>

          <div className="field">
            <label className="label">University</label>
            <div className="control">
              <div className="select">
                <select>
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
                <select>
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
                <select>
                  <option>Anthropology</option>
                  <option>Computer Science</option>
                  <option>Math</option>
                  <option>Earth Science</option>
                </select>
              </div>
            </div>
          </div>

          <Link to='/register'>
          <button className="button is-primary">Register</button>
        </Link>
      </div>
    </div>
  )
}
}

export default StudentRegister;
