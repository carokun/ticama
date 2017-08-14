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
    $(html).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
    $(body).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
  }

  render() {
    const { username, email, competitions, website, type } = this.props.company;
    return(
      <div>
        {/* <div style={{position: 'absolute', top: '0', backgroundColor: 'red', height: '100%', width: '100%', zIndex: '0'}}></div> */}
      <div className="container is-fluid">
        <div className="top-spacer">
        </div>
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            <CompanyOverview user={this.props.company}/>
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            {/* we want to toggle this with CompetitionRecord depending on if it's the company viewing their
            own profile or not. this logic also applies with club profile*/}
            <CompetitionRecord />
          </div>
        </div>
      </div>
    </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilePublic);
