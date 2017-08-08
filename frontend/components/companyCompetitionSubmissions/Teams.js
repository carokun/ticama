import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './Team'

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='notification tile is-child'>
        <div style={{overflow: 'scroll', height: '700px'}}>
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </div>

      </div>
    )
  }
}

export default Teams;
