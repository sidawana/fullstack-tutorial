import React from'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return (
        <div>
        <h1>{props.course}</h1>
        </div>)
}

const Part = (props)=>{
    console.log(props)
    return (
        <p>
        {props.name} {props.exercises}
      </p>
    )
}

const Content = (props) => {
    const prop = props.parts
    console.log(prop[0].name)
    console.log('before here')
    return (
  <div>
      <Part name={prop[0].name} exercises = {prop[0].exercises} />
      <Part name={prop[1].name} exercises = {prop[1].exercises} />
      <Part name={prop[2].name} exercises = {prop[2].exercises} />   
  </div>
)}

const Total = (props) =>{
    const prop= props.parts
    console.log(prop)
    return(
        <>
         <p>Number of exercises   {prop[0].exercises + prop[1].exercises + prop[2].exercises} 
        </p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    
    return (
        <div>
            <Header course = {course.name} />
            <Content parts = {course.parts} />
            <Total parts = {course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))