import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompetitionCard extends Component {
  render() {
    var comp = this.props.comp;
    return(
      <div className="card" style={{margin: '10px', boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 20px 0px rgba(204, 204, 204, 0.1)'}}>
        <header className="card-header">
          <p className="card-header-title">
            <Link to={'/competition/' + comp._id}>
              <a>{comp.title}</a>
            </Link>

          </p>
          <small className="card-header-icon">{comp.startDate} - {comp.endDate}</small>
        </header>
        <div className="card-content" >
          {/* //ellipses is broken */}
          <div className="content" style={{height: '50px', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {comp.description}
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <Link to={'/analytics'}>
                <a>Analytics</a>
              </Link>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <Link to={'/competition/' + comp._id}>
                <a>Event Page</a>
              </Link>
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
              {this.props.user.competitions
              .filter(comp => {
                return new Date(comp.endDate) >= new Date()
              })
              .map(comp => {
                return <CompetitionCard comp={comp}/>
              })}
            </div>
          </article>
          <article className="tile is-child" style={{backgroundColor: 'transparent'}}>
            <p className="title is-2">Past Competitions</p>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              {this.props.user.competitions
              .filter(comp => {
                return new Date(comp.endDate) < new Date()
              })
              .map(comp => {
                return <CompetitionCard comp={comp}/>
              })}
            </div>
          </article>
      </div>
    )
  }
}

export default CompetitionRecordAdmin;
