import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <strong>1. This is question one of the application?</strong>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            This is the answer to question #1. Per te munere albucius signiferumque, vel ea docendi salutatus. Mea expetenda pertinacia adversarium ei, ut vel sint singulis, pri omnis dicam et. Ea facete antiopam voluptatum has, eum nobis conclusionemque ex. Ex qui aperiam omnesque perpetua.

          </div>
        </div>

      </div>
    )
  }
}

export default TeamApplication;
