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
  componentWillMount(){
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #6190E8; transition:all ease-in-out 0.2s;');
    $(body).attr("style", 'background-color: #6190E8; transition:all ease-in-out 0.2s;');
  }
  componentWillUnmount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
    $(body).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
  }
  render() {

    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.club;

      return (
        <div>
        <div className="container is-fluid">
          <div className="top-spacer">
            <button className="button is-danger is-large" style={{position: 'absolute', top: '50px', right: '53px', zIndex: '5'}} onClick={() => this.props.endEdit()}>
              <span className="icon">
                <i className="fa fa-check"></i>
              </span>
              <span>Done</span>
            </button>
          </div>
            <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
              <div className='tile is-3 is-parent is-vertical'>
                {(this.props.user._id === this.props.id) ? <ClubOverviewEdit user={this.props.user}/> : <ClubOverviewEdit user={this.props.club}/>}
              </div>
              <div className='tile is-9 is-parent is-vertical'>
                <CompetitionRecordEdit user={this.props.club}/>
              </div>
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
