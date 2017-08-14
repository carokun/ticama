import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmissionPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    if (!this.props.comp) {
      return <div>you have no competitions!!!</div>
    } else {
      return (
        <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
          <div className='tile is-parent is-vertical'>
            <article className="tile is-child">
                <p className="title is-3">{this.props.comp.title}</p>
            </article>
            </div>
            <div className='tile is-parent'>
            <div className='tile is-child is-10'>
              <button className='button is-primary' style={{justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'white', width: '100px', height:'50px'}}>
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span className="title is-4">
                  Case
                </span>
              </button>
            </div>
            <div className='tile is-child is-2' style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button className='button is-info' style={{width: '60px', height: '50px'}}>
                <span className="icon" style={{transform: 'scale(0.75)'}}>
                  <i className="fa fa-question"></i>
                </span>
              </button>
              <span style={{width: '4px'}}> </span>
              <button className='button is-danger' style={{width: '60px', height: '50px'}}>
                <span className="icon" style={{transform: 'scale(0.75)'}}>
                  <i className="fa fa-upload"></i>
                </span>
              </button>
            </div>
          </div>
              <table className='table is-striped is-fullwidth'>
                <tbody>
                  <tr>
                    <td>
                      Team4_Powerpoint_V5.ppt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Team4_Powerpoint_V4.ppt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Team4_Powerpoint_V3.ppt
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
      )
    }

  }
}

export default SubmissionPortal;
