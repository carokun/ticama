import React, { Component } from 'react';

class CompanyOverview extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <article>
            <div style={{position: 'relative'}}>
              <figure className="image is-4by3">
                <img src="http://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </div>
          </article>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">MUSE</p>
              <p className="subtitle is-4">Marketing</p>
            </div>
          <div className='tile is-child is-12'>
            <p className="size-4">☎️ (415) 901- 3910</p>
            <p className="size-4">🔗 <a href="www.mckinsey.com">www.musepenn.org</a></p>
            <p className="size-4">📍 401 Walnut St.<br/>Philadelphia, PA 19104</p>
          <hr/>
            <p>This is a description of the club.</p>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default CompanyOverview;
