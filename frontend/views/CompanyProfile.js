import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../components/companyProfile/CompetitionRecord';
import CompanyOverview from '../components/companyProfile/CompanyOverview';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;

    return(
      <div className="container is-fluid">
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            <CompanyOverview />
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            <CompetitionRecord />
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
