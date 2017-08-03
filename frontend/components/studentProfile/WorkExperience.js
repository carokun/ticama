import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <div>
          <p className="title">Work Experience</p>
        </div>
        <hr/>
        <div style={{padding: '0px 20px'}}>
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
             kf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj slkf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf sl kf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf sl kf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf sl kf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf sl kf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slkf kjsdlkfjsdlk sdlkf lksfj lks sdfjlsdfj sdjf slfj sl sdjf sdlkjf lskdjf slf sl jfsfj slkj fsljdf slf sl jfsfj slkj fsljdf sl 
          </div>
        </div>

      </article>
    )
  }
}

export default WorkExperience;
