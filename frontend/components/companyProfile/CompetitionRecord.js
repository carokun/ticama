import React, { Component } from 'react';

class CompetitionRecord extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='notification tile is-parent is-vertical' style={{backgroundColor: '#F9F7F9'}}>
          <article className="tile is-child">
            <p className="title is-2">Open Competitions</p>
          </article>
          <article className="tile is-child">
            <p className="title is-2">Past Competitions</p>
          </article>
      </div>
    )
  }
}

export default CompetitionRecord;
