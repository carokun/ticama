import React, { Component } from 'react';

class ClubOverview extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.user);
    return(

      <div>
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src={this.props.user.image ? this.props.user.image : 'https://s3-us-west-2.amazonaws.com/mirathon/defaultpp.png'} />
            </figure>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">{this.props.user.fname}</p>
              <p className="subtitle is-4">{this.props.user.industry}</p>
            </div>
          <div className='tile is-child is-12'>
            <p className="size-4">🔗 <a href={this.props.user.website}>{this.props.user.website}</a></p>
            <p className="size-4">📩 {this.props.user.email}</p>
          <hr/>
            <p>{this.props.user.about}</p>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default ClubOverview;
