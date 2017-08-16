import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentMessage from './StudentMessage';

class CompetitionMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight: '490.2px'
    }
  }
  render(){
    return(
      <article id="doggo" className="no-padding tile is-child notification" style={{display: 'flex', minHeight: this.state.minHeight}}>
          <div style={{flex: '1', minHeight: this.state.minHeight, padding: '20px', display: 'flex', flexDirection: 'column'}}>
            <span>
              <p className="title is-2" style={{display: 'inline-block'}}>Messages</p>
              <div className="circle-big">3</div>
            </span>
              <StudentMessage />
              <StudentMessage />
          </div>
          <div style={{backgroundColor: '#f0f0f8', flex: '2', minHeight: this.state.minHeight, padding: '20px'}}>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>
              Hello this is Tiff when the box is expanded?</p>
            <p style={{fontSize: '16px', margin: '3px !important'}}>05/16/2017 4:45pm</p>
            <p style={{fontSize: '16px', margin: '3px !important'}}>From: Team 1</p>
            <hr />
            <div className="white-box">
              The body of the message goes here!
            </div>
            <div className="top-spacer"></div>
            <div className="field">
              <label className="label">Reply</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" rows="3"></textarea>
              </div>
            </div>
            <a className="button is-info" style={{float: 'right'}}>
              <span className="icon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <span> Send</span>
            </a>
          </div>
      </article>
    )
  }
}

export default CompetitionMessages;
