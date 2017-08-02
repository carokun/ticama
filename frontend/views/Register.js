import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/register/student'>
          <button className="blue-button">Student</button>
        </Link>
        <Link to='/register/company'>
          <button className="blue-button">Company</button>
        </Link>
        <Link to='/register/club'>
          <button className="blue-button">Club</button>
        </Link>
      </div>
    )
  }
}

export default Register;
