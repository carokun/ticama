import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unread: true,
    }
  }
  render(){
    console.log(document);
    return(
      <div style={{marginTop: '-1.46em'}}>
        <svg height="2px" width="100%">
          <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:'#eaeaea', strokeWidth:'2'}} />
        </svg>
        <div>
          <span>{this.state.unread && <div className="circle"></div>} 
          <span style={{fontSize: '16px', fontWeight: 'bold', width: '320px', marginBottom: '-1.5em !important', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            Hello, this is Tiff.</span></span>
        </div>
          <p style={{fontSize: '12px', margin: '3px !important'}}>
            05/16/2017 4:45pm</p>
          <p style={{fontSize: '14px', whiteSpace: 'nowrap', width: '320px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            Short snippet of the message like 100 characters can be truncated after it exceeds the length</p>
        <svg height="2px" width="100%">
          <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:'#eaeaea', strokeWidth:'2'}} />
        </svg>
      </div>
    )
  }
}

export default StudentMessage;
