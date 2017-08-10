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

  }

  componentWillMount() {
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
          {(this.props.id === this.props.user._id) &&
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

        }
        </div>
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            {(this.props.id === this.props.user._id) ? <CompanyOverview user={this.props.user}/> : <CompanyOverview user={this.props.company}/>}
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            {/* we want to toggle this with CompetitionRecord depending on if it's the company viewing their
            own profile or not. this logic also applies with club profile*/}
            {(this.props.id === this.props.user._id) ? <CompetitionRecordAdmin /> : <CompetitionRecord />}
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilePublic);
