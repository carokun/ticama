import React, { Component } from 'react';

class CompanyOverview extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
              <p className="title is-2">{this.props.user.fname}</p>
              <p className="subtitle is-4">Consulting</p>
          <div style={{height: '10px', width: '100%'}}></div>
          <div className='tile is-child is-12'>
            <p className="size-4">☎️ (415) 901- 3910</p>
            <p className="size-4">🔗 <a href="www.mckinsey.com">{this.props.user.website}</a></p>
            <p className="size-4">📍 401 Walnut St.<br/>Philadelphia, PA 19104</p>
          <hr/>
            <p>this is something about the company</p>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default CompanyOverview;
