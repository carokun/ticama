import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyOverviewEdit from '../../components/companyProfile/CompanyOverviewEdit';
import CompetitionRecordEdit from '../../components/companyProfile/CompetitionRecordEdit';
import axios from 'axios';

class CompanyProfileEdit extends Component {
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
      const { username, email, pastCompetitions, currentCompetitions, website, type } = this.state.user;
      return(
        <div className="container is-fluid">
          <div className="top-spacer">
            <button className="button is-danger is-large" style={{float: 'right', marginTop: '10px'}} onClick={() => this.props.endEdit()}>
              <span className="icon">
                <i className="fa fa-floppy-o"></i>
              </span>
              <span>Save</span>
            </button>
          </div>
          <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
            <div className='tile is-3 is-parent is-vertical'>
              <CompanyOverviewEdit user={this.state.user} />
            </div>
            <div className='tile is-9 is-parent is-vertical'>
              <CompetitionRecordEdit />
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfileEdit);
