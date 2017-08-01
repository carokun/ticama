import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('name', this.props.username);
    return (
      <div>
        {this.props.username}
      </div>
    )
  }
}

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
