import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am Puneet</h1>
        <Person name="Puneet" age="24"/>
        <Person name="Kapil" age="23">My Hobbies: Racing</Person>
        <Person name="Meghali" age="25"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
