import React, { Component } from 'react';

class BasicStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="tile is-parent is-vertical is-3">
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
            <button className="button is-info" onClick={() => this.props.edit()}
              style={{position: 'absolute', right: '0', zIndex: '1'}}>
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span>Edit</span>
            </button>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
            <article className='tile media is-vertical' style={{marginBottom: '10px'}}>
              <div className="title is-2" style={{marginBottom: '10px'}}>{this.props.user.fname} {this.props.user.lname}</div>
              <div className="subtitle is-4" style={{margin: '0px'}}>{this.props.user.about || 'meeee!'}</div>
            </article>
            <article className='tile is-parent media'>
              <div className='tile is-child is-2'>
                <span className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </span>
              </div>
              <div className='tile is-child is-10'>
                <div>
                  {this.props.user.university}
                </div>
                <div>
                  {this.props.user.major}
                </div>
                <div>
                  {this.props.user.year || 'UHOH :('}
                </div>
              </div>
            </article>
            <article className='tile is-parent media'>
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
            </article>
            <article className='media tile is-vertical'>
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
            </article>
            <article className='tile is-parent media'>
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
            </article>
        </article>
      </div>
    )
  }
}

export default BasicStudent;
