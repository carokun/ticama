import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TeamApplication from '../components/companyCompetitionApplications/TeamApplication.js';
import Teams from '../components/companyCompetitionApplications/Teams.js';
import {updateViewed} from '../actions/ViewedActions.js'

class CompanyCompetitionApplications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicationViewed: this.props.viewed.applications[0],
      index: 1
    }
  }

  changeAppViewed(application, index) {
    this.setState({
      applicationViewed: application,
      index
    })
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="top-spacer"></div>
        <div className="tabs">
          <ul>
            <li><a onClick={() => this.props.setView('summary')}>Summary</a></li>
            <li><a onClick={() => this.props.setView('submissions')}>Teams</a></li>
            <li className="is-active"><a>Applications</a></li>
          </ul>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4 is-vertical">
            <article className="tile is-child notification">
              <p className="title is-2"><strong>BCG Undergraduate Case Competition</strong></p>
              <p>08/25/2017 – 08/27/2017</p>
              <p>John M. Huntsman Hall <br/> 345 Walnut St. <br/> Philadelphia, PA 19102</p>
            </article>

            <TeamApplication application={this.state.applicationViewed} index={this.state.index}/>
          </div>
          <div className="tile is-parent is-8">
            <Teams changeAppViewed={this.changeAppViewed.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    viewed: state.viewed
  }
};

const mapDispatchToProps = () => {
  return {
    updateViewed: (competition) => dispatch(updateViewed(dispatch, competition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetitionApplications);
