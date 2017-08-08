import React, { Component } from 'react';

class CompetitionExperience extends Component {
  constructor(props) {
    super(props);
  }

  renderCompetitionExperience(item) {
    return (
      <tr key={item}>
        <td className='level'>
          <div className='level-left tile is-vertical'>
            <div>
              Deloitte Undergraduate Case Competition
            </div>
            <div>
              2017
            </div>
            <div>
              Philadelphia, PA
            </div>
          </div>
          <div className='level-right' style={{marginTop: '30px'}}>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
          </div>
        </td>
      </tr>
    )
  }

  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <article className='media'>
          <p className="title">Competitions</p>
        </article>
        <article className='media'>
          <table className='table is-fullwidth'>
            <tbody>
              {[1, 2, 3].map((item) => this.renderCompetitionExperience(item))}
{/*
              <tr>
                <td className='level'>
                  <div className='level-left tile is-vertical'>
                    <div>
                      Deloitte Undergraduate Case Competition
                    </div>
                    <div>
                      2017
                    </div>
                    <div>
                      Philadelphia, PA
                    </div>
                  </div>
                  <div className='level-right tile is-vertical level'>
                    <div className='tile level-right'>
                      <div className='tag is-warning'>
                        1st
                      </div>
                    </div>
                    <span style={{height: '15px'}}></span>
                    <div className='level-right tile'>
                      <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
                      <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
                    </div>
                  </div>
                </td>
              </tr> */}
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
