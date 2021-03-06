import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // Every time the state is changed, It will rerender the DOM/Update it.
  // Also, the state will be available only if we are using class based Components extends Component.
  // Assigning some unique id with all the elements of the array. so that Virtual DOM can efficiently identify the changes.

  state = {
    person: [
      {id:"as1", name: "Puneet", age: "24"},
      {id:"as2", name: "Kapil", age: "23"},
      {id:"as3", name: "Meghali", age: "25"}
    ],
    stateShowPerson: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const persons = {
      ...this.state.person[personIndex]
    };

    persons.name = event.target.value;

    const person = [...this.state.person]

    person[personIndex] = persons

    this.setState({person: person});
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
  };

  render() {

    // Use inline styling only in case if you want to scope your style for this component.

    let persons = null
    let btnClass = '';

    if (this.state.stateShowPerson){
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            change={(event) => this.nameChangeHandler(event, person.id)}
            key={person.id}
            name={person.name}
            age={person.age}
            // Any of the following 2 can b used.
            // click={this.deletePersonHandler.bind(index)}
            click={() => this.deletePersonHandler(index)}
            />
          })}
          </div>
      );
      btnClass = classes.Red 

    }
    const usedClasses = []
    if(this.state.person.length <= 2){
      usedClasses.push(classes.red);
    }
    if(this.state.person.length <= 1){
      usedClasses.push(classes.bold);
    }

    return (
      <div className={ classes.App }>
        <h1>Hi, You are using react.</h1>
        <p className={usedClasses.join(' ')}>It is working really very good.</p>
        {/* {this.switchNameHandler()} if we will use () with this method then it will automatically call the function while rendering, 
              but we want it to be called on click event. (So, don't use "()" with function name.")  */}
        <button className= { btnClass } onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Above written code will be compiled in this manner.'));
  }
}

export default App;
