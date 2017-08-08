import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StudentProfileEditable from './StudentProfile/StudentProfileEditable';
import StudentProfilePublic from './StudentProfile/StudentProfilePublic';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      isOwnProfile: (this.props.user.username === this.props.match.params.username)
    }
    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
  }


  startEdit() {
    this.setState({edit: true})
  }

  endEdit() {
    this.setState({edit: false})
  }

  isEditing() {
    if (this.state.edit && this.state.isOwnProfile) {
      return <StudentProfileEditable endEdit={this.endEdit}/>
    } else {
      return <StudentProfilePublic isOwnProfile={this.state.isOwnProfile} startEdit={this.startEdit}/>
    }
  }

  render() {
    return (
      <div>
        {this.isEditing()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
