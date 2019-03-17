import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // Every time the state is changed, It will rerender the DOM/Update it.
  // Also, the state will be available only if we are using class based Components extends Component.
  state = {
    person: [
      {name: "Puneet", age: "24"},
      {name: "Kapil", age: "23"},
      {name: "Meghali", age: "25"}
    ]
  };

  switchNameHandler = (newName) => {
    console.log("switch name clicked.")
    this.setState(
      {
        person: [
          {name: newName, age: "24"},
          {name: "Kapil", age: "23"},
          {name: "Champak", age: "25"}
        ]
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, You are using react.</h1>
        {/* {this.switchNameHandler()} if we will use () with this method then it will automatically call the function while rendering, 
              but we want it to be called on click event. (So, don't use "()" with function name.")  */}
        <button onClick={this.switchNameHandler.bind(this, "Tommy")}>Switch Names</button>
        <Person 
        name={this.state.person[0].name} age={this.state.person[0].age}
        />
        <Person
         name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, "Puneet!!")}> 
         My Hobbies: Racing
         </Person>
        <Person 
        name={this.state.person[2].name} age={this.state.person[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
