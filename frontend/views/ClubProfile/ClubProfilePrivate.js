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
  componentWillMount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
    $(body).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
  }
  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;

    return (
      <div className="container is-fluid">
        <div className="top-spacer">
            <div style={{position: 'absolute', top: '50px', right: '53px', zIndex: '5'}}>
              <button className="button is-danger is-large" style={{marginRight: '10px'}} onClick={() => this.props.newComp()}>
                <span className="icon">
                  <i className="fa fa-plus"></i>
                </span>
                <span>New Competition</span>
              </button>
              <button className="button is-info is-large" onClick={() => this.props.startEdit()}>
                <span className="icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span>Edit</span>
              </button>
            </div>
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
