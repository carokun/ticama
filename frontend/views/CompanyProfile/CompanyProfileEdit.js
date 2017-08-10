import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyOverviewEdit from '../../components/companyProfile/CompanyOverviewEdit';
import CompetitionRecordEdit from '../../components/companyProfile/CompetitionRecordEdit';
import axios from 'axios';

import { updateBasicInfo } from '../../actions/CompanyActions.js';


class CompanyProfileEdit extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #6190E8');
    $(body).attr("style", 'background-color: #6190E8')
  }
  componentWillUnmount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9');
    $(body).attr("style", 'background-color: #F9F7F9')
  }

  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.company;
    return(
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
            <CompanyOverviewEdit user={this.props.user} updateBasicInfo={this.props.updateBasicInfo} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateBasicInfo: (about, email, phone, website, industry) => dispatch(updateBasicInfo(dispatch, about, email, phone, website, industry))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfileEdit);
