import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import App from './components/App';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import { configureStore, history } from './store/configureStore';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path='/' component={App}>
      </Route>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
