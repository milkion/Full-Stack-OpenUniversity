import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  const total = good + neutral + bad
  const average = total !== 0 ? (good - bad) / total : 0
  const positive = total !== 0 ? (good / allClicks) * 100 : 0


  console.log(good, neutral, bad, allClicks)


  return (
    <div>
      <Header text = "give feedback"></Header>

      <Button onClick = {handleGood} text ="Good"></Button>
      <Button onClick = {handleNeutral} text = "Neutral"></Button>
      <Button onClick = {handleBad} text = "Bad"></Button>

      <Header text = "statistics"></Header>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} average = {average} positive = {positive}></Statistics>
    </div>
  )
}


const Statistics = ({good, neutral, bad, total, average, positive}) => {
  console.log(total)
  return total > 0 ? (
    <table>
      <StatisticLine text = "Good" counter = {good}></StatisticLine>
      <StatisticLine text = "Neutral" counter = {neutral}></StatisticLine>
      <StatisticLine text = "Bad" counter = {bad}></StatisticLine>
      <StatisticLine text = "All" counter = {total}></StatisticLine>

      <StatisticLine text = "Average" counter = {average}></StatisticLine>
      <StatisticLine text = "Positive" counter = {positive + '%'}></StatisticLine>
    </table>
  ) : <p>No feedback given</p>
}


//ANYTHING HERE SHOULD BE FOR DISPLAYING COMPONENETS
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Header = ({text}) => <h1>{text}</h1>

const StatisticLine = ({text, counter}) => (
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>
)




export default App