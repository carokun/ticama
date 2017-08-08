import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../views/Login';
import Register from '../views/Register';
import StudentRegister from '../views/StudentRegister';
import ClubRegister from '../views/ClubRegister';
import CompanyRegister from '../views/CompanyRegister';
import StudentProfile from '../views/StudentProfile';
import ClubProfile from '../views/ClubProfile';
import CompanyProfile from '../views/CompanyProfile';
import StudentDashboard from '../views/StudentDashboard';
import StudentCompetition from '../views/StudentCompetition';
import Navbar from '../views/Navbar';
import CompanyCompetition from '../views/CompanyCompetition.js';
import axios from 'axios';
import CompanyCompetitionSubmissions from '../views/CompanyCompetitionSubmissions.js';


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
        <Route path='/register/student' exact component={StudentRegister} />
        <Route path='/register/club' exact component={ClubRegister} />
        <Route path='/register/company' exact component={CompanyRegister} />
      </div>);
    } else if (this.props.user.type === 'student') {
      return (<div>
        <Route path='/' component={Navbar}/>
        <Route path='/profile/student/:username' exact component={StudentProfile} />
        <Route path='/profile/club' exact component={ClubProfile} />
        <Route path='/profile/company' exact component={CompanyProfile} />
        <Route path='/dashboard/student' exact component={StudentDashboard} />
        <Route path='/competition/student' exact component={StudentCompetition} />
        <Route path='/competition/company' exact component={CompanyCompetition} />
        <Route path='/competition/company/submissions' exact component={CompanyCompetitionSubmissions} />
      </div>);
    } else if (this.props.user.type === 'company') {

    } else if (this.props.user.type === 'club') {

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
