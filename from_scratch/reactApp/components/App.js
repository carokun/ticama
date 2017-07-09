import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={NavBar} />
          <Route exact path='/' component={Home} />
          <Route exact path='/userProfile' component={UserProfile} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
