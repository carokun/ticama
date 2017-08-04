import React, { Component } from 'react';

class BasicStudent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="tile is-parent is-vertical is-3">
        <figure className="image is-4by3">
          <img src="http://bulma.io/images/placeholders/640x480.png" />
        </figure>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
            <div className='tile is-child'>
              <p className="title is-4">Matt Pearing</p>
              <p className="subtitle is-6">Data Scientist</p>
              <p>this is a small f;kldsijflkjfl;ksdjf;lksjfblurb this is a small blurb this is a small blurb this is a small blurb this is a small blurb</p>
            </div>
          <hr/>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-graduation-cap"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            <div>
              University of Pennsylvania
            </div>
            <div>
              Computer Science and Economics
            </div>
            <div>
              2020
            </div>
          </div>
        </div>
        <hr/>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-lightbulb-o"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            <div className='tags'>
              <span className="tag is-primary is-medium">
                interest 1
              </span>
              <span className="tag is-primary is-medium">
                interest 2
              </span>
              <span className="tag is-primary is-medium">
                interest 3
              </span>
              <span className="tag is-primary is-medium">
                interest 4
              </span>
              <span className="tag is-primary is-medium">
                interest 5
              </span>
              <span className="tag is-primary is-medium">
                interest 6
              </span>
            </div>
          </div>
        </div>
        <hr/>

        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-link"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            www.carokun.github.io
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-linkedin"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            www.linkedin.com/carolineokun
          </div>
        </div>
        <hr/>
        <div className='tile is-parent'>
          <div className='tile is-child is-2'>
            <span className="icon">
              <i className="fa fa-paper-plane"></i>
            </span>
          </div>
          <div className='tile is-child is-10'>
            <a style={{textDecoration: 'none'}}>
              Resume
            </a>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default BasicStudent;
