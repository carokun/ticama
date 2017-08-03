import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './Notification.js';

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
        <h1 className='title is-3'>👋🏼 Welcome Caroline!</h1>
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-4'>Your Current Competitions</h3>
        <hr/>
        <h3 className='subtitle is-4'>Notifications</h3>
        <hr/>
        <Notification />
      </div>

    )
  }
}

export default SummaryInfo;
