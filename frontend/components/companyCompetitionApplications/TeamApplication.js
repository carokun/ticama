import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (!this.props.application) {
      return <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
        no applications :(
      </div>
    } else {
      return (
        <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
          <p className="title is-2"><strong>Team {this.props.index}</strong></p>
          {this.props.application.responses.map((resp, index) => {
            return <div>
              <div className='tile is-parent'>
                <div className='tile is-child'>
                  <strong>{index + 1}. {resp.question}</strong>
                </div>
              </div>
              <div className='tile is-parent'>
                <div className='tile is-child'>
                  {resp.response}
                </div>
              </div>
            </div>;
          })}


        </div>
      )
    }
  }
}

export default TeamApplication;
