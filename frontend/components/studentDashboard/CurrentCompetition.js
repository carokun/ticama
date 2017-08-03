import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentCompetition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="tile is-parent is-success notification is-success">
      <div className="tile is-child is-2">
        PIC
      </div>
      <div className="tile is-child is-10">
        <p><strong> McKinsey Case Competition </strong></p>
        <p> Time until submission: </p>
        <button className='button is-warning'>Portal</button>
      </div>
    </div>
    )
  }
}

export default CurrentCompetition;
