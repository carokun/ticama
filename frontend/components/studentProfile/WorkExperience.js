import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <article className='media'>
          <p className="title">Work Experience</p>
        </article>
        <article className='media'>
          <div style={{padding: '0px 15px'}}>
            <div className='level'>
              <div className='level-left'>
                <div>
                  <div style={{fontSize: '19px'}}>
                    <strong>
                      Google
                    </strong>
                  </div>
                  <div>
                    Product Manager
                  </div>
                </div>

              </div>
              <div className='level-right'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <div>
                    June 2017 - July 2017
                  </div>
                  <div>
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
            <div>
              Eu sint tamquam intellegebat per. Autem prodesset pri at. Ut cum dicit antiopam imperdiet, at ornatus oportere aliquando nam. Sit ei utinam aliquip aliquando, mel dolorem appareat expetenda ne, ius quaeque suscipit aliquando eu. Nihil electram deterruisset at cum. Vis in alienum facilisis dissentiunt, ne mea movet quaerendum. Sed an dicit tacimates adolescens, erat dicit laudem at pri.
            </div>
          </div>
        </article>


      </article>
    )
  }
}

export default WorkExperience;
