import React, { Component } from 'react';

class BasicStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('The users information', this.props.user);
    return(
      <div className="tile is-parent is-vertical is-3">
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src={this.props.user.image ? this.props.user.image : 'https://s3-us-west-2.amazonaws.com/mirathon/defaultpp.png'} />
            </figure>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
            <article className='tile media is-vertical' style={{marginBottom: '10px'}}>
              <div className="title is-2" style={{marginBottom: '10px'}}>{this.props.user.fname} {this.props.user.lname}</div>
              <div className="subtitle is-4" style={{margin: '0px'}}>{this.props.user.about || 'About me.'}</div>
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
                  {this.props.user.year || 'The year field in schema doesnt exist'}
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
                  {this.props.user.interests.map(interest => {
                    return (
                      <span className="tag is-info is-medium">
                        {interest}
                      </span>
                    )
                  })}
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
                  {this.props.user.linkedin}
                </div>
              </div>
              <div className='tile is-parent'>
                <div className='tile is-child is-2'>
                  <span className="icon">
                    <i className="fa fa-link"></i>
                  </span>
                </div>
                <div className='tile is-child is-10'>
                  {this.props.user.website}
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
                <a href={this.props.user.resume} target="_blank" style={{textDecoration: 'none'}}>
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
