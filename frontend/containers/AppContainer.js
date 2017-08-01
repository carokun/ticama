import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../views/Login';
import Register from '../views/Register';
import { BrowserRouter, Route } from 'react-router-dom';

const AppContainer = ({ name }) => {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
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
