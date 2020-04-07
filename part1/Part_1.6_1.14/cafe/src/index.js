
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Heading = (props) =>{
	console.log("in Heading: ", props)
	const text = props.title

	return (
		<div>
		<h1>
		{text}
		</h1>
		</div>
	)
}

const Heading2 = (props) =>{
	console.log("in Heading2: ", props)
	const text = props.title2

	return(
		<div>
		<h2>
		{text}
		</h2>
		</div>)
}

const Button = (props) =>{
	console.log("inButton", props)
	const{handler, name, count}  = props

	return(
		<button onClick={handler} id={name}>
		{name}
		</button>)
}

const Clicks = (props) =>{
	console.log("inClicks", props)
	const count = props.count

	return(
		<p class='click'>
		{count}
		</p>)
}

const Stats = (props) =>{
	console.log("inStats: ", props)
	const{value, name} = props
	return(
		<p class="stats">
		{name}: {value}
		</p>)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [click, setClick] = useState(0)
  const title = "Giray's Cafe Feedback"
  const title2 = "Statistics"


  const handleGood = () => {
  	console.log('clicked good: ', good)
  	setGood(good+1)
  }

  const handleBad = () => {
  	setBad(bad+1)
  	console.log('clicked bad: ', bad)
  }

  const handleNeutral = () => {
  	setNeutral(neutral+1)
  	console.log('clicked neutral: ', neutral)
  }


  return (
    <div>
      <Heading title={title} />
      <Button handler={handleGood} name="GOOD" count={good}/>
      <Button handler={handleNeutral} name='NEUTRAL' count={neutral}/>
      <Button handler={handleBad} name='BAD' count={bad}/>
      <div>
      <Clicks count={good}/>
      <Clicks count={neutral}/>
      <Clicks count={bad}/>
      </div>
      <Heading2 title2={title2}/>
      <Stats name="Good" value={good}/>
      <Stats name="Neutral" value={neutral}/>
      <Stats name="Bad" value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
