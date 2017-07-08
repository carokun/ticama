import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Home} />
          <Route exact path='/userProfile' component={UserProfile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
