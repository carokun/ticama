import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionOverview from '../components/studentCompetition/CompetitionOverview.js'
import MessageBoard from '../components/studentCompetition/MessageBoard.js'
import axios from 'axios';

class StudentCompetition extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props.history.location.pathname, 'HURR');
    const path = this.props.history.location.pathname
    const id = path.slice(13);

    console.log('grabbbing competition info....');
    axios.get('/api/getcompetitions/id')
    .then(response => {
      console.log('mycompetitions', response);
      this.setState({
        competitions: response.data.competitions
      })
    })
  }
  render() {
    return (
      <div className="container is-fluid">
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            <CompetitionOverview comp={this.props.comp}/>
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            <MessageBoard comp={this.props.comp}/>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentCompetition);
