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
    ],
    stateShowPerson: false
  };

  nameChange = (event) => {
    this.setState({
      person: [
        {name: "Puneet", age:"24"},
        {name:  event.target.value, age:"23"},
        {name: "Meghali", age: "25"}
      ]
    });
  };

  togglePersonHandler = () => {
    const currentstate = this.state.stateShowPerson;
    this.setState({stateShowPerson: ! currentstate});
  };

  deletePersonHandler = (index) => {
    // Arrays are reference type. next line is not a good practice 
    // const person = this.state.person;
    // Use any of the below syntax:
    // #1. const person = this.state.person.slice()
    // #2. const person = [...this.state.person]
    const person = [...this.state.person]
    person.splice(index, 1);
    this.setState({person: person});
  }

  render() {

    // Use inline styling only in case if you want to scope your style for this component.
    const style1={
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "10px",
      cursor: "pointer"
    }

    let persons = null

    if (this.state.stateShowPerson){
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age}
            // Any of the following 2 can b used.
            // click={this.deletePersonHandler.bind(index)}
            click={() => this.deletePersonHandler(index)}
            />
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, You are using react.</h1>
        {/* {this.switchNameHandler()} if we will use () with this method then it will automatically call the function while rendering, 
              but we want it to be called on click event. (So, don't use "()" with function name.")  */}
        <button style={style1} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
