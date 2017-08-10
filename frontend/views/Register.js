import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '17%', flexDirection: 'column', width: '400px'}}>
        <h2 className="title is-1">Register</h2>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '-1.5em', marginBottom: '1.5em'}}>
          <span>Return to </span>
          <span style={{width: '5px', height: '2px'}}></span>
          <Link to='/'> Login</Link>
        </div>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '400px'}}>
          <Link to='/rstudent'>
            <button className="button is-info">Student</button>
          </Link>
          <Link to='/rcompany'>
            <button className="button is-info">Company</button>
          </Link>
          <Link to='/rclub'>
            <button className="button is-info">Club</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Register;
