import { useState } from "react"

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses = {courses} />
    </div>
  )
}

const Courses  = ({courses}) => {
  return (<div>
    {courses.map(course =>
      <Course key = {course.id} course = {course} />)}
  </div>)
}

const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props.name)
  return (
    <h1>{props.name}</h1>
  )
}

const Content = ({parts}) => {
  // console.log(parts[0].name)
  return (
    <div>
      {parts.map(part =>
          <Part key = {part.id} part = {part}/>
      )}
      <Total parts = {parts} />
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} : {part.exercises}</p>
  )
}

const Total = ({parts}) => {

  const total = parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )
  return (
    <p><b>Total of {total} exercises</b></p>
  )
}



export default App

