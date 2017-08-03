import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './Notification.js';
import CurrentCompetition from './CurrentCompetition.js';

class SummaryInfo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <article className='tile is-child notification is-tile'>
        <h1 className='title is-4'>👋🏼 Welcome Caroline!</h1>
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-5'>Your Current Competitions</h3>
        <hr/>
        <CurrentCompetition />
        <h3 className='subtitle is-5'>Notifications</h3>
        <Notification />
      </article>

    )
  }
}

export default SummaryInfo;
