import React, { Component } from 'react';

class CompetitionOverview extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("", this.props.comp);
    return(
      <div>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', margin: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">{this.props.comp.title}</p>
              <p className="subtitle is-3">{this.props.comp.company.fname}</p>
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
              Start: {this.props.comp.startDate} <br/>
              End: {this.props.comp.endDate}
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
              {this.props.comp.location}
            </div>

          </div>
          <div className='tile is-child'>
            <hr/>
          </div>
        </div>


        <div className='tile is-parent'>
          <div className='tile is-child'>
            <div>
              {this.props.comp.description}
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
            {this.props.comp.individuals.map((person) => {
              <img src="http://bulma.io/images/placeholders/32x32.png" style={{margin: '0px 5px', borderRadius: '100px'}}/>
            })
            }
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child' style={{display: 'flex', justifyContent: 'center'}}>
            <button className='button is-info is-large' style={{width: '100%'}}>
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
