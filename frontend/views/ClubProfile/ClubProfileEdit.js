import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecordEdit from '../../components/clubProfile/CompetitionRecordEdit';
import ClubOverviewEdit from '../../components/clubProfile/ClubOverviewEdit';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ClubProfileEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.club;

      return (
        <ReactCSSTransitionGroup
          transitionName="smallfade"
          transitionAppear={true}
          transitionAppearTimeout={350}
          transitionEnter={false}
          transitionLeave={false}>
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
    </ReactCSSTransitionGroup>
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
