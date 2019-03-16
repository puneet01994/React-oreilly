import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am Puneet</h1>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
