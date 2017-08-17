import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmissionPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
        <p className="title is-2"><strong>Team {this.props.index}</strong></p>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <button className='button is-info' style={{justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'white', width: '100%', height:'50px'}}>
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span style={{width: '10px'}}>
              </span>
              <span className="title is-4">
                Download Final Submission
                {/* comment */}
              </span>
            </button>
          </div>
        </div>
            <table className='table is-striped is-fullwidth'>
              <tbody>
                <tr>
                  <td>
                    <a href="https://s3-us-west-2.amazonaws.com/mirathon/examplecase.pdf" target="_blank">
                      Team4_Powerpoint_V5.ppt
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://s3-us-west-2.amazonaws.com/mirathon/examplecase.pdf" target="_blank">
                      Team4_Powerpoint_V4.ppt
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    Team4_Powerpoint_V3.ppt
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='tile is-child level'>
              <div className='level-right'>
                <span style={{fontSize: '18px', paddingRight: '5px'}}><strong>Final Score</strong></span>
                <input className='input' type='text' style={{width: '70px'}}/>
              </div>

            </div>
            <div style={{height: '20px'}}>

            </div>
            <div className='tile is-child level'>
              <div className='level-right'>
                <button className='button is-danger'>Submit</button>
              </div>
            </div>
      </div>
    )
  }
}

export default SubmissionPortal;
