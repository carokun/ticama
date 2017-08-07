import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompetitionSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article className="tile is-child notification">
        <p className="title is-2"><strong>Summary</strong></p>
        <table className="table is-fullwidth">
          <tr>
            <td>Time until submission</td>
            <td style={{color: '#5BD3B8'}}>4d 3h 5m</td>
          </tr>
          <tr>
            <td>Number of teams</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Number of participants</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Percent of teams submitted</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Number of missing submissions</td>
            <td>4</td>
          </tr>
        </table>
      </article>
    )
  }
}

export default CompetitionSummary;
