import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>👋🏼 Welcome Caroline!</h1>
      </div>
    )
  }
}

export default SummaryInfo;
