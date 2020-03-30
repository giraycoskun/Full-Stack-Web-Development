import React from 'react'
import ReactDOM from 'react-dom'

/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
*/

const Header = (props) => {
	console.log(props)
	return(

		<h1>{props.course}</h1>
	)
}

const Parts = (props) => {
	return(
		<p>
		{props.partName} => {props.exerciseNumber}
		</p>
		)
}

const Content = (props) => {

	return(
	<div>
      <Parts partName={props.parts[0].name} exerciseNumber={props.parts[0].exercises}/>
      <Parts partName={props.parts[1].name} exerciseNumber={props.parts[1].exercises}/>
      <Parts partName={props.parts[2].name} exerciseNumber={props.parts[2].exercises}/>

	</div>
	)

}

const Total = (props) => {
	return(
		<p>Number of exercises {props.number}</p>
	)

}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]}/>
      <Total number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
