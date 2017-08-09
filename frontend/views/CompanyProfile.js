import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CompanyProfileEdit from './CompanyProfile/CompanyProfileEdit';
import CompanyProfilePublic from './CompanyProfile/CompanyProfilePublic';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      isOwnProfile: (this.props.user._id === this.props.match.params.id)
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
    console.log(this.props.user._id);
    console.log(this.props.match.params.id);
    if (this.state.edit && this.state.isOwnProfile) {
      return <CompanyProfileEdit endEdit={this.endEdit} id={this.props.match.params.id}/>
    } else {
      return <CompanyProfilePublic isOwnProfile={this.state.isOwnProfile} startEdit={this.startEdit} id={this.props.match.params.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
