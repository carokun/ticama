import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'modal',
      newCompany: '',
      newStart: '',
      newEnd: '',
      newRole: '',
      newDescription: '',
      newLocation: '',
      experiences: []
    }

  }

  renderExperiences() {
    return this.props.experiences.map(experience => (<article className='media' style={{height: '300px'}}>
      <div style={{padding: '0px 15px', width: '100%'}}>
        <div className='level'>
          <div className='level-left'>
            <div>
              <div style={{fontSize: '19px'}}>
                <strong>
                  {experience.company}
                </strong>
              </div>
              <div>
                {experience.role}
              </div>
            </div>

          </div>
          <div className='level-right'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <div>
                {experience.startDate} - {experience.endDate}
              </div>
              <div>
                {experience.location}
              </div>
            </div>
          </div>
        </div>
        <div>
          {experience.description}
        </div>
      </div>

    </article>));
  }

  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <article className='media'>
          <p className="title">Relevant Experiences</p>
        </article>
        {this.renderExperiences()}
      </article>
    )
  }
}

export default WorkExperience;
