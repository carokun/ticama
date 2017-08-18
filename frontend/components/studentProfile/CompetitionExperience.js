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
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/carokun-IMG_2320.png" style={{height: '24px', width: '24px', margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/evan-Screen+Shot+2017-08-16+at+5.24.56+PM.png" style={{height: '24px', width: '24px', margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="https://s3-us-west-2.amazonaws.com/mirathon/tifchang-tiff_bio.png" style={{height: '24px', width: '24px', margin: '0px 5px', borderRadius: '100px'}}/>
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
              {/* {
                (this.props.competitionExperience.length > 0) ? (this.props.competitionExperience.map((item) =>  */}
                {this.renderCompetitionExperience({title: 'Accenture Undergraduate Case Competition', startDate:'09/19/2015', endDate: '09/18/2015', location: 'New York, NY'})}
              {/* // ))
                : <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h2 style={{fontSize: '20px'}}>You don't have any competition experience.
                    <br/><p style={{fontSize: '40px'}}>☹️</p><br/>
                    Visit <strong>Discover</strong> to get started!</h2>
                </div>
              } */}
            </tbody>
          </table>
        </article>
        {/* <nav className="pagination">
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
        </nav> */}
      </article>
    )
  }
}

export default CompetitionExperience;
