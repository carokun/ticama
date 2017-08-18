import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './Notification.js';
import CurrentCompetition from './CurrentCompetition.js';

class NoCompetitions extends Component {
  render() {
    return (
      <div className="center">
        <p>You are currently not enrolled in any case competitions <br/><p style={{fontSize: '30px'}}>😟</p><br/>
          Checkout some of our recommendations and get started! <br/><p style={{fontSize: '30px'}}>👉</p><br/> </p>
      </div>
    )
  }
};

class SummaryInfo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isCompeting: false,
    }

  }

  render() {
    var { fname, lname } = this.props.user;
    return (
      <article className='tile is-child notification is-tile'>
        <div style={{height: '30px', width: '1px'}}></div>
        <h1 className='title is-1'>👋🏼 Welcome {fname}!</h1>
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-2'>Your Current Competitions</h3>
        <hr/>
          <CurrentCompetition />
          {/* <CurrentCompetition comp={comp} changeCompView={this.props.changeCompView.bind(this)}/> */}
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-2'>Notifications</h3>
        <hr/>
        <div style={{overflow: 'scroll', height: '400px'}}>
          <Notification isOrganizer={false} sender={"BCG Organizer"} msg={"Attention! Cases are due in 3 hours. Please seek help if needed."}/>
          <Notification isOrganizer={true} sender={"Mirathon"} msg={"Tiffany uploaded a revision to the slidedeck."}/>
          <Notification isOrganizer={false} sender={"BCG Organizer"} msg={"Hey guys! Food is in room 253 on the 2nd floor."}/>
          <Notification isOrganizer={true} sender={"Mirathon"} msg={"Caroline uploaded a revision to the slidedeck."}/>
        </div>
      </article>

    )
  }
}

export default SummaryInfo;
