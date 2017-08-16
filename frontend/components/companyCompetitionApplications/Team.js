import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      approved: this.props.application.tempApproved || false,
      rejected: this.props.application.tempRejected || false
    }
  }

  componentDidMount() {

    axios.get('/api/application/' + this.props.application._id)
    .then(response => {
      console.log(response.data);
      this.setState({
        approved: response.data.application.tempApproved || false,
        rejected: response.data.application.tempRejected || false,
        members: response.data.application.team
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  tempAccepted() {
    axios.post('/api/temp/application/update', {
      tempApproved: !this.state.approved,
      tempRejected: false,
      appId: this.props.application._id,
      competition: this.props.competition._id
    })
    .then(response => {
      console.log(response.data);
    })
    this.setState({
      approved: !this.state.approved,
      rejected: false
    })
  }

  tempRejected() {
    axios.post('/api/temp/application/update', {
      tempApproved: false,
      tempRejected: !this.state.rejected,
      appId: this.props.application._id,
      competition: this.props.competition._id
    })
    .then(response => {
      console.log(response.data);
    })
    this.setState({
      approved: false,
      rejected: !this.state.rejected
    })
  }

  checkColor() {
    if (this.state.approved) {
      return {backgroundColor: 'rgba(63, 191, 63, 0.20)'}
    } else if (this.state.rejected) {
      return {backgroundColor: 'rgba(193, 66, 66, 0.20)'}
    }
    return {};
  }

  render() {
    return (
      <div className="box columns" key={this.props.application._id} style={this.checkColor()}>
        <div className="column">
          <strong> Team {this.props.index} </strong>
        </div>
        <div className="column is-3">
          {this.props.application.date}
        </div>
        <div className="column is-6">
          {this.state.members.map((member, index) => {
            if (index === this.state.members.length - 1) {
              return <div key={member._id}>
                {member.fname}
              </div>
            }
            return <div key={member._id}>
              {member.fname}, 
            </div>
          })}
        </div>
        <div className="column">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button className='button is-primary is-outlined' style={{width: '55px'}} onClick={this.tempAccepted.bind(this)}>√</button>
            <button className='button is-danger is-outlined' style={{width: '55px'}} onClick={this.tempRejected.bind(this)}>X</button>
          </div>
          <div style={{height: '5px'}}>

          </div>
          <div>
            <button className='button is-warning' style={{width: '115px'}} onClick={() => this.props.changeAppViewed(this.props.application, this.props.index)}>View</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
