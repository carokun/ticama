import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../../components/clubProfile/CompetitionRecord';
import ClubOverview from '../../components/clubProfile/ClubOverview';
import axios from 'axios';

class ClubProfilePublic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.id)
    .then(response => {
      console.log(response.data.user);
      this.setState({
        user: response.data.user
      })
    })
  }

  render() {
    if (this.state.user) {
      const { username, email, pastCompetitions, currentCompetitions, website, type } = this.state.user;

      return (
        <div className="container is-fluid">
          <div className="top-spacer">
            {(this.props.id === this.props.user._id) && <button className="button is-info is-large" style={{float: 'right', marginTop: '10px'}} onClick={() => this.props.startEdit()}>
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span>Edit</span>
            </button>}
          </div>
            <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
              <div className='tile is-3 is-parent is-vertical'>
                <ClubOverview />
              </div>
              <div className='tile is-9 is-parent is-vertical'>
                <CompetitionRecord />
              </div>
            </div>
        </div>
      )
    } else {
      return (
        <div></div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfilePublic);
