import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const UserProfile = ({ username }) => {
    return (
      <div>
        {username}
      </div>
    );
};

UserProfile.propTypes = {
    username: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
