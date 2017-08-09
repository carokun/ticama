import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../../components/companyProfile/CompetitionRecord';
import CompanyOverview from '../../components/companyProfile/CompanyOverview';
import CompetitionRecordAdmin from '../../components/companyProfile/CompetitionRecordAdmin';
import axios from 'axios';

class CompanyProfilePublic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.id)
    .then(response => {
      console.log(response.data.user);
      this.setState({
        user: response.data.user
      })
    })
  }

  render() {
    if (this.state.user) {
      const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;

      return(
        <div className="container is-fluid">
          <div className="top-spacer">
            <button className="button is-info is-large" style={{float: 'right', marginTop: '10px'}} onClick={() => this.props.startEdit()}>
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span>Edit</span>
            </button>
          </div>
          <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
            <div className='tile is-3 is-parent is-vertical'>
              <CompanyOverview />
            </div>
            <div className='tile is-9 is-parent is-vertical'>
              {/* we want to toggle this with CompetitionRecord depending on if it's the company viewing their
              own profile or not. this logic also applies with club profile*/}
              {(this.props.isOwnProfile) ? <CompetitionRecordAdmin /> : <CompetitionRecord />}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      );
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilePublic);
