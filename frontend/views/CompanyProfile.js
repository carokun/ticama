import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CompanyProfileEdit from './CompanyProfile/CompanyProfileEdit';
import CompanyProfilePublic from './CompanyProfile/CompanyProfilePublic';

import axios from 'axios';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      company: null
    }
    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.match.params.id)
    .then(response => {
      if (!response.data.user || response.data.user.type !== 'company') {
        this.props.history.push('/error');
      }
      this.setState({
        company: response.data.user
      })
    })
  }


  startEdit() {
    this.setState({edit: true})
  }

  endEdit(saveMe) {
    console.log('HEHEHEHHE', saveMe);
    this.setState({edit: false})
  }

  isEditing() {
    if (!this.state.company) {

    } else if (this.state.edit && this.props.match.params.id === this.props.user._id) {
      return <CompanyProfileEdit endEdit={this.endEdit} id={this.props.match.params.id} company={this.state.company}/>
    } else {
      return <CompanyProfilePublic isOwnProfile={this.props.match.params.id === this.props.user._id} startEdit={this.startEdit} id={this.props.match.params.id} company={this.state.company}/>
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
