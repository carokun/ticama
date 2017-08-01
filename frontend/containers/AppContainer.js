import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import { BrowserRouter, Route } from 'react-router-dom';

const AppContainer = ({ name }) => {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={function() {
            return <Title name={name} />
          }}/>
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
