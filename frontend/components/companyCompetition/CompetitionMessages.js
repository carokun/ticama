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
              <div className="circle-big">2</div>
            </span>
              <StudentMessage read={false} message={{subject: 'Confusion on Q5', message: 'Hi, I was not sure how to approach evaluating market cap on Q5.'}}/>
              <StudentMessage read={false} message={{subject: 'Access to documents', message: 'Hi, I do not have access to the documents needed in the case.'}}/>
              <StudentMessage read={true} message={{subject: 'Approval for Q4', message: 'I need approval to move onto Q5. Can someone get this to me asap.'}}/>
          </div>
          <div style={{backgroundColor: '#f0f0f8', flex: '2', minHeight: this.state.minHeight, padding: '20px'}}>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>
              Approval for Q4</p>
            <p style={{fontSize: '16px', margin: '3px !important'}}>05/16/2017 4:45pm</p>
            <p style={{fontSize: '16px', margin: '3px !important'}}>From: Team 1</p>
            <hr />
            <div className="white-box">
              I need approval to move onto Q5. Would someone on the organization team review our submission for Q4? If there
              are any questions, please feel free to reach out here or via email, whatever is most convenient. 
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
