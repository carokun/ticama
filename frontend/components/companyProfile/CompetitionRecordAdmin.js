import React, { Component } from 'react';


class CompetitionCard extends Component {
  render() {
    return(
      <div className="card" style={{margin: '10px', boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 20px 0px rgba(204, 204, 204, 0.1)'}}>
        <header className="card-header">
          <p className="card-header-title">
            <a>Competition Title</a>
          </p>
          <small className="card-header-icon">05/27/2017 - 05/30/2017</small>
        </header>
        <div className="card-content" >
          {/* //ellipses is broken */}
          <div className="content" style={{height: '50px', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            Brief Description. This is a super brief description of the competition like this should be like roughly 500 characters or so and we can truncate using elipses.
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <a>Analytics</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <a>Event Page</a>
            </span>
          </p>
        </footer>
      </div>
    )
  }
}

class CompetitionRecordAdmin extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='tile is-parent is-vertical' style={{backgroundColor: 'transparent'}}>
          <article className="tile is-child" style={{backgroundColor: 'transparent'}}>
            <p className="title is-2">Open Competitions</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <CompetitionCard />
              <CompetitionCard />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <CompetitionCard />
              <CompetitionCard />
            </div>
          </article>
          <article className="tile is-child" style={{backgroundColor: 'transparent'}}>
            <p className="title is-2">Past Competitions</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <CompetitionCard />
              <CompetitionCard />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <CompetitionCard />
              <CompetitionCard />
            </div>
          </article>
      </div>
    )
  }
}

export default CompetitionRecordAdmin;
