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
      <div className="login-page">
        <div className="login-wrapper">
          <h2>Student Registration</h2>
          <p>First Name</p>
          <input type="text" name="fname" value={this.state.fname} onChange={(e) => this.setState({fname: e.target.value})}/>
          <p>Last Name</p>
          <input type="text" name="lname" value={this.state.lname} onChange={(e) => this.setState({lname: e.target.value})}/>
          <p>Username</p>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({usernmae: e.target.value})}/>
          <p>Password</p>
          <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
          <p>Confirm Password</p>
          <input type="password" name="password2" value={this.state.password2} onChange={(e) => this.setState({password: e.target.value})}/>

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
          <button className="blue-button">Register</button>
        </Link>
      </div>
    </div>
  )
}
}

export default StudentRegister;
