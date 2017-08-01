import React from 'react';
console.log(React);
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import NavBar from './NavBar';

//import provider to pass down store
import { Provider } from 'react-redux';

//implementing redux
import { createStore } from 'redux';

//import the reducer
import counters from '../reducers/index.js';

//link store to a reducer
const store = createStore(counters);

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            {this.props.value.counter1}
            {this.props.value.counter2}
            <button onClick={this.props.onIncrement}>+</button>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={Home} />
            <Route exact path='/userProfile' component={UserProfile} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

const render = () => {ReactDOM.render(
  <App value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})}/>,
  document.getElementById('root')
)}

//render function will run anytime the state changes because we subscribe
//it as listener
store.subscribe(render);

//call render to set initial state
render();
