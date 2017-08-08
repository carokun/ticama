import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {
  render() {
    return (
      <div className="box columns">
        <div className="column">
          <strong> Team 1 </strong>
        </div>
        <div className="column is-3">
          5/11/2017 1:34pm
        </div>
        <div className="column is-6">
          Tiffany, Caroline, Jay, Ben, Corey
        </div>
        <div className="column">
          <div>
            <div className="select is-success">
              <select>
                <option>Approve</option>
                <option>Reject</option>
              </select>
            </div>
          </div>
          <div style={{height: '5px'}}>

          </div>
          <div>
            <button className='button is-warning' style={{width: '115px'}}>View</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
