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
	return(

		<h1>{props.course}</h1>
	)
}

const Parts = (props) => {
	return(
		<p>
		{props.partName} {props.exerciseNumber}
		</p>
		)
}

const Content = (props) => {

	return(
	<div>
      <Parts partName={props.names[0]} exerciseNumber={props.numbers[0]}/>
      <Parts partName={props.names[1]} exerciseNumber={props.numbers[1]}/>
      <Parts partName={props.names[2]} exerciseNumber={props.numbers[2]}/>

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
  	const part1 = 'Fundamentals of React'
  	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14



  return (
    <div>
      <Header course={course} />
      <Content names={[part1,part2,part3]} numbers={[exercises1, exercises2, exercises3]}/>
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
