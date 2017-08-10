import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../../components/clubProfile/CompetitionRecord';
import ClubOverview from '../../components/clubProfile/ClubOverview';
import axios from 'axios';

class ClubProfilePublic extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.club;
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9');
    $(body).attr("style", 'background-color: #F9F7F9')
    return (
      <div className="container is-fluid">
        <div className="top-spacer">
          {(this.props.id === this.props.user._id) && <button className="button is-info is-large" style={{position: 'absolute', top: '50px', right: '53px', zIndex: '5'}} onClick={() => this.props.startEdit()}>
            <span className="icon">
              <i className="fa fa-pencil"></i>
            </span>
            <span>Edit</span>
          </button>}
        </div>
          <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
            <div className='tile is-3 is-parent is-vertical'>
              <ClubOverview user={this.props.user}/>
            </div>
            <div className='tile is-9 is-parent is-vertical'>
              <CompetitionRecord user={this.props.user}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfilePublic);
