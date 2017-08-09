import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyOverviewEdit from '../../components/companyProfile/CompanyOverviewEdit';
import CompetitionRecordEdit from '../../components/companyProfile/CompetitionRecordEdit';

class CompanyProfileEdit extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;
    return(
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
            <CompanyOverviewEdit />
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            {/* we want to toggle this with CompetitionRecord depending on if it's the company viewing their
            own profile or not. this logic also applies with club profile*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfileEdit);
