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
      <h1 className='title notification is-primary'>👋🏼 Welcome Caroline!</h1>
    )
  }
}

export default SummaryInfo;
