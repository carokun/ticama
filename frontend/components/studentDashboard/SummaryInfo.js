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
        {/* toggle currentcompetition & nocompetitions using isCompeting*/}
        {this.props.user.competitions.map(comp => {
          return <CurrentCompetition comp={comp} changeCompView={this.props.changeCompView.bind(this)}/>;
        })}

        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-2'>Notifications</h3>
        <hr/>
        <div style={{overflow: 'scroll', height: '400px'}}>
          <Notification isOrganizer={false} sender={"McKinsey & Co."}/>
          <Notification isOrganizer={true} sender={"Ticama"}/>
          <Notification isOrganizer={true} sender={"McKinsey & Co."}/>
          <Notification isOrganizer={false} sender={"McKinsey & Co."}/>
        </div>
      </article>

    )
  }
}

export default SummaryInfo;
