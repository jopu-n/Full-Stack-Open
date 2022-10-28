import { useState } from 'react'

const Button = props => {
  return (
      <button onClick={props.handleClick}> {props.text} </button>
  )
}

const StatisticLine = props => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, totalCount }) => {
  const averageScore = ( ((good*1) + (neutral*0) + (bad*-1)) / totalCount )

  const positives = `${(good / totalCount) * 100} %`

  if(totalCount === 0) return (<p>No feedback given.</p>)

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine
            value={good}
            text="good"
          />
          <StatisticLine
            value={neutral}
            text="neutral"
          />
          <StatisticLine
            value={bad}
            text="bad"
          />
          <StatisticLine
            value={totalCount}
            text="all"
          />
          <StatisticLine
            value={averageScore}
            text="average"
          />
          <StatisticLine
            value={positives}
            text="positive"
          />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const handleGoodCounter = () => {
    setTotalCount(totalCount + 1)
    setGood(good + 1)
  }

  const handleNeutralCounter = () => {
    setTotalCount(totalCount + 1)
    setNeutral(neutral + 1)
  }

  const handleBadCounter = () => {
    setTotalCount(totalCount + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div> 
        <h1>Give Feedback</h1>       
        <Button
          handleClick={handleGoodCounter}
          text="good"
        />
        <Button
          handleClick={handleNeutralCounter}
          text="neutral"
        />
        <Button
          handleClick={handleBadCounter}
          text="bad"
        />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalCount={totalCount}
      />
    </div>
  )
}

export default App