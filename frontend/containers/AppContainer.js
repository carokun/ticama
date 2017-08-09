import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../views/Login';
import Register from '../views/Register';

import StudentNavbar from '../views/StudentNavbar';
import StudentRegister from '../views/StudentRegister';
import StudentDiscover from '../views/StudentDiscover';
import StudentDashboard from '../views/StudentDashboard';
import StudentProfile from '../views/StudentProfile';
import StudentCompetition from '../views/StudentCompetition';

import CompanyNavbar from '../views/StudentNavbar';
import CompanyRegister from '../views/CompanyRegister';
import CompanyProfile from '../views/CompanyProfile';
import CompanyProfileEdit from '../views/CompanyProfile/CompanyProfileEdit';
import CompanyHome from '../views/CompanyHome';
import CompanyCompetition from '../views/CompanyCompetition.js';

import ClubNavbar from '../views/StudentNavbar';
import ClubRegister from '../views/ClubRegister';
import ClubProfile from '../views/ClubProfile/ClubProfile';
import ClubProfileEdit from '../views/ClubProfile/ClubProfileEdit';

import axios from 'axios';


import { BrowserRouter, Route } from 'react-router-dom';

import { authenticateUser } from '../actions/AuthActions';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.authenticateUser();
  }

  findType() {

    if (!this.props.user.type) {
      return (<div>
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/rstudent' exact component={StudentRegister} />
        <Route path='/rclub' exact component={ClubRegister} />
        <Route path='/rcompany' exact component={CompanyRegister} />
      </div>);
    } else if (this.props.user.type === 'student') {
      return (<div>
        <Route path='/' component={StudentNavbar}/>
        <Route path='/profile/student/:id' exact component={StudentProfile} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/home' exact component={StudentDashboard} />
        <Route path='/competition/:id' exact component={StudentCompetition} />
        <Route path='/discover' exact component={StudentDiscover} />
      </div>);
    } else if (this.props.user.type === 'company') {
      return (<div>
        <Route path='/' component={CompanyNavbar}/>
        <Route path='/home' exact component={CompanyProfile} />
        <Route path='/profile/student/:id' exact component={StudentProfile} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/edit/profile' exact component={CompanyProfileEdit} />
        <Route path='/competition/:id' exact component={CompanyCompetition} />
      </div>);
    } else if (this.props.user.type === 'club') {
      return (<div>
        <Route path='/' component={ClubNavbar}/>
        <Route path='/home' exact component={ClubProfile} />
        <Route path='/profile/student/:id' exact component={StudentProfile} />
        <Route path='/edit/profile' exact component={ClubProfileEdit} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/competition/:id' exact component={CompanyCompetition} />
      </div>);
    }
  }

  render() {
    return (
      <BrowserRouter>
          {this.findType()}
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      authenticateUser: () => dispatch(authenticateUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
