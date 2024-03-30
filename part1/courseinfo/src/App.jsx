import { useState } from "react"

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
      <Header name= {course.name}></Header>
      <Content {...course.parts}></Content>
      <Total {...course.parts}></Total>
    </div>
  )
}



const Header = (props) => {
  console.log(props.name)
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (parts) => {
  console.log(parts[0].name)
  return (
    <div>
      <p>Part {parts[0].name} : {parts[0].exercises}</p>
      <p>Part {parts[1].name} : {parts[1].exercises}</p>
      <p>Part {parts[2].name} : {parts[2].exercises}</p>
    </div>
  )
}

const Total = (parts) => {
  console.log(parts)
  return (
    <p>Number of exercises : {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}



export default App

