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

  render() {

    // Use inline styling only in case if you want to scope your style for this component.
    const style1={
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "10px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, You are using react.</h1>
        {/* {this.switchNameHandler()} if we will use () with this method then it will automatically call the function while rendering, 
              but we want it to be called on click event. (So, don't use "()" with function name.")  */}
        <button style={style1} onClick={this.togglePersonHandler}>Toggle Person</button>
        {this.state.stateShowPerson === true? 
        <div>
          <Person 
          name={this.state.person[0].name} age={this.state.person[0].age}
          />
          <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age} 
          click={this.switchNameHandler.bind(this, "Puneet!!")}
          change={this.nameChange}> 
          My Hobbies: Racing
          </Person>
          <Person 
          name={this.state.person[2].name} age={this.state.person[2].age}
          />
        </div> 
        : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
