import React from 'react'
import Person from './Person.css'
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    };
    return(
        <div className="Person" style={style}>
        <p onClick= {props.click}>I am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="Text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person
