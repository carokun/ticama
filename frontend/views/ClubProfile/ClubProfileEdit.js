import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecordEdit from '../../components/clubProfile/CompetitionRecordEdit';
import ClubOverviewEdit from '../../components/clubProfile/ClubOverviewEdit';


class ClubProfileEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all of the user variables for the company
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;
    console.log('user', this.props.user);


    return (
      <div className="container is-fluid">
        <div className="top-spacer">
          <button className="button is-danger is-large" style={{float: 'right', marginTop: '10px'}}>
            <span className="icon">
              <i className="fa fa-floppy-o"></i>
            </span>
            <span>Save</span>
          </button>
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