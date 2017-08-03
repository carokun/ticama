import React, { Component } from 'react';

class CompetitionExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <div>
          <p className="title">Competition Experience</p>
        </div>
        <hr/>
        <table className='table is-fullwidth'>
          <tbody>
            <tr>
              <td>
                <div>
                  Deloitte Undergraduate Case Competition
                </div>
                <div>
                  2017
                </div>
                <div>
                  Philadelphia, PA
                </div>

              </td>
            </tr>
            <tr>
              <td>
                <div>
                  Deloitte Undergraduate Case Competition
                </div>
                <div>
                  2017
                </div>
                <div>
                  Philadelphia, PA
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  Deloitte Undergraduate Case Competition
                </div>
                <div>
                  2017
                </div>
                <div>
                  Philadelphia, PA
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    )
  }
}

export default CompetitionExperience;
