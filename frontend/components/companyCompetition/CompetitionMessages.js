import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompetitionMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight: '490.2px'
    }
  }
  render(){
    console.log(document);
    return(
      <article id="doggo" className="no-padding tile is-child notification" style={{display: 'flex', minHeight: this.state.minHeight}}>
          <div style={{flex: '1', minHeight: this.state.minHeight}}>
            apsdoifjaposdifjpaosidfnpoaisdfjnopaisdfj
          </div>
          <div style={{backgroundColor: '#f0f0f8', flex: '2', minHeight: this.state.minHeight}}>
            apsdoifjaposdifjpaosidfnpoaisdfjnopaisdfj
          </div>
      </article>
    )
  }
}

export default CompetitionMessages;
