import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unread: this.props.read,
    }
  }
  render(){
    console.log(document);
    return(
      <div >
        <svg height="2px" width="37%">
          <line x1="0" y1="0" x2="82%" y2="0" style={{stroke:'#eaeaea', strokeWidth:'2'}} />
        </svg>
        <div>
          <span>{!this.state.unread && <div className="circle"></div>}
          <span style={{fontSize: '16px', fontWeight: 'bold', width: '320px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {this.props.message.subject}</span></span>
        </div>
          <p style={{fontSize: '12px', margin: '3px !important'}}>
            05/16/2017 4:45pm</p>
          <p style={{fontSize: '14px', whiteSpace: 'nowrap', width: '320px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {this.props.message.message}</p>
        <svg height="2px" width="37%">
          <line x1="0" y1="0" x2="82%" y2="0" style={{stroke:'#eaeaea', strokeWidth:'2'}} />
        </svg>
      </div>
    )
  }
}

export default StudentMessage;
