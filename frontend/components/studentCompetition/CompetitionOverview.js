import React, { Component } from 'react';

class CompetitionOverview extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">Undergraduate Case Competition</p>
              <p className="subtitle is-3">McKinsey & Co</p>
            </div>
          </div>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-calendar"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            <div>
              5/11/2017 - 5/13/2017
            </div>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-location-arrow"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            <div>
              401 Walnut St.
            </div>
            <div>
              Philadelphia, PA 19104
            </div>

          </div>
          <div className='tile is-child'>
            <hr/>
          </div>
        </div>


        <div className='tile is-parent'>
          <div className='tile is-child'>
            <div>
              This is a brief description blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaah blah blaaaah blaaah
            </div>
          </div>
        </div>
        <div style={{height: '10px'}}>
        </div>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child'>
            <div style={{padding: '0px', fontSize: '20px'}}>
              Members
              <hr />
            </div>
          </div>

          <div className='tile is-child'>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <button className='button is-success'>
              Register
            </button>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default CompetitionOverview;
