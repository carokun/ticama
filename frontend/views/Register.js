import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '17%', flexDirection: 'column', width: '800px'}}>
        <h2 className="title is-1">Register</h2>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '-1.5em', marginBottom: '1.5em'}}>
          <span>Return to </span>
          <span style={{width: '5px', height: '2px'}}></span>
          <Link to='/'> Login</Link>
        </div>
        <div className="columns">
          <div className="column" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/student.png" style={{height: '200px', marginBottom: '20px'}}></img>
            <Link to='/rstudent'>
            <button className="button is-info">Student</button>
          </Link>
          </div>
          <div className="column" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/company.png" style={{height: '200px', marginBottom: '20px'}}></img>
            <Link to='/rcompany'>
            <button className="button is-info">Company</button>
          </Link>
          </div>
          <div className="column" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/club.png" style={{height: '200px', marginBottom: '20px'}}></img>
            <Link to='/rclub'>
            <button className="button is-info">Club</button>
          </Link>

          </div>
        </div>
      </div>
    )
  }
}

export default Register;
