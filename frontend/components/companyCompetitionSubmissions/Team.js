import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {
  render() {
    return (
      <div className="box columns">
        <div className="column">
          <strong> Team {this.props.index} </strong>
        </div>
        <div className="column is-3">
          5/11/2017 1:34pm
        </div>
        <div className="column is-6">
          Tiffany, Caroline, Jay, Ben, Corey
        </div>
        <div className="column">
          <div>
            <button className='button' style={{width: '100px'}}>Message</button>
          </div>
          <div style={{height: '5px'}}>

          </div>
          <div>
            <button className='button is-warning' style={{width: '100px'}} onClick={() => this.props.changeAppViewed(this.props.app, this.props.index)}>View</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
