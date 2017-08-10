import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecordEdit from '../../components/clubProfile/CompetitionRecordEdit';
import ClubOverviewEdit from '../../components/clubProfile/ClubOverviewEdit';
import axios from 'axios';


class ClubProfileEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.club;
      return (
        <div>
        <div className="container is-fluid">
          <div className="top-spacer">
            <button className="button is-success is-large" style={{float: 'right', marginTop: '10px'}} onClick={() => this.props.endEdit()}>
              <span className="icon">
                <i className="fa fa-check"></i>
              </span>
              <span>Done</span>
            </button>
          </div>
            <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
              <div className='tile is-3 is-parent is-vertical'>
                {(this.props.user._id === this.props.id) ? <ClubOverviewEdit user={this.state.user}/> : <ClubOverviewEdit user={this.state.company}/>}
              </div>
              <div className='tile is-9 is-parent is-vertical'>
                <CompetitionRecordEdit user={this.state.user}/>
              </div>
            </div>
        </div>
          <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
            <div className='tile is-3 is-parent is-vertical'>
              <ClubOverviewEdit />
            </div>
            <div className='tile is-9 is-parent is-vertical'>
              <CompetitionRecordEdit />
            </div>
          </div>
          </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfileEdit);
