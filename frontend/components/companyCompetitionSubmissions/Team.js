import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      name: ''
    }
  }

  componentDidMount() {
    axios.get('/api/team/' + this.props.team._id)
    .then(response => {
      console.log(response.data);
      this.setState({
        members: response.data.team.members,
        name: response.data.team.name
      })
    })
  }

  render() {
    return (
      <div className="box columns">
        <div className="column">
          <strong> Team {this.props.index} </strong>
        </div>
        <div className="column is-3">
          {this.state.name}
        </div>
        <div className="column is-6">
          <div>
            {this.state.members.map((member, index) => {
              if (this.state.members.length - 1 === index) {
                return <span>{member.fname}</span>
              }
              return <span>{member.fname}, </span>
            })}
          </div>
        </div>
        <div className="column">
          <div>
            <button className='button' style={{width: '100px'}}>Message</button>
          </div>
          <div style={{height: '5px'}}>

          </div>
          <div>
            <button className='button is-warning' style={{width: '100px'}} onClick={() => this.props.changeTeamViewed(this.props.team, this.props.index)}>View</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
