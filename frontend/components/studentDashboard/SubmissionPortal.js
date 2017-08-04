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
    return (
      <div className='notification' style={{backgroundColor: 'white', height: '500%'}}>
        <div className='tile is-parent'>
          <div className='tile is-child is-10'>
            <button className='button is-success' style={{color: 'white'}}>
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>
                Case
              </span>
            </button>
          </div>
          <div className='tile is-child is-2' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className='button is-info' style={{width: '60px'}}>
              <span className="icon" style={{transform: 'scale(0.75)'}}>
                <i className="fa fa-question"></i>
              </span>
            </button>
            <span style={{width: '4px'}}> </span>
            <button className='button is-danger' style={{width: '60px'}}>
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
                    kdfjslkdfj
                  </td>
                </tr>
                <tr>
                  <td>
                    kdfjslkdfj
                  </td>
                </tr>
                <tr>
                  <td>
                    kdfjslkdfj
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    )
  }
}

export default SubmissionPortal;
