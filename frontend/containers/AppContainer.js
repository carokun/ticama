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

import { BrowserRouter, Route } from 'react-router-dom';

const AppContainer = ({ name }) => {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/register/student' exact component={StudentRegister} />
          <Route path='/register/club' exact component={ClubRegister} />
          <Route path='/register/company' exact component={CompanyRegister} />
          <Route path='/profile/student' exact component={StudentProfile} />
          <Route path='/profile/club' exact component={ClubProfile} />
          <Route path='/profile/company' exact component={CompanyProfile} />
        </div>
      </BrowserRouter>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
