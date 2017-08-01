import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        {user.username}
      </div>
    )
  }
}

UserProfile.propTypes = {
    username: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        user: state.auth
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
