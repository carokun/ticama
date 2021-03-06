import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompetitionExperience extends Component {
  constructor(props) {
    super(props);
  }

  renderCompetitionExperience(item) {
    console.log(item);
    return (
      <tr key={item._id}>
        <Link to={'/competition/' + item._id}>
        <td className='level'>
          <div className='level-left tile is-vertical'>
            <div>
              {item.title}
            </div>
            <div>
              {item.startDate} - {item.endDate}
            </div>
            <div>
              {item.location}
            </div>
          </div>
          <div className='level-right' style={{marginTop: '30px'}}>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
          </div>
        </td>
        </Link>
      </tr>
    )
  }

  render() {
    console.log(this.props.competitionExperience);
    return(
      <article className="tile is-child notification is-vertical">
        <article className='media'>
          <p className="title">Competitions</p>
        </article>
        <article className='media'>
          <table className='table is-fullwidth'>
            <tbody>
              {this.props.competitionExperience.map((item) => this.renderCompetitionExperience(item))}
            </tbody>
          </table>
        </article>
        <nav className="pagination">
          <a className="pagination-previous">Previous</a>
          <a className="pagination-next">Next page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link">1</a>
            </li>
            <li>
              <a className="pagination-link">2</a>
            </li>
            <li>
              <a className="pagination-link is-current">3</a>
            </li>
          </ul>
        </nav>
      </article>
    )
  }
}

export default CompetitionExperience;
