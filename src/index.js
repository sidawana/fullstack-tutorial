import React,{useState} from'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    // console.log(props)
    return (
        <div>
        <h1>{props.text}</h1>
        </div>)
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Stats = (props)=><tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({good,neutral,bad})=> {
  let all = good+bad+neutral
  let goodPercent = (all===0)?0:(good/(all))
  if (all) {
  return(
  <table>
    <tbody>
      <Stats text="neutral" value = {neutral} />
      <Stats text="bad" value = {bad} />
      <Stats text ="all" value = {all} />
      <Stats text = "average" value = {good+bad*-1} />
      <Stats text = "positive" value = {goodPercent+'  %'} />
    </tbody>
  </table>
  )
  }
  return(
    <div>No feedback given</div>
  )
}





const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToGood = () => setGood(good+1)
  
  const setTobad = () => setBad(bad+1)
  const setToneutral = () => setNeutral(neutral+1)
  

    return (
        <div>
            <Header text = {'Give feedback'} />
            <Button text="good"  handleClick = {setToGood} />
            <Button text="neutral" handleClick = {()=>setToneutral()} />
            <Button text="bad" handleClick = {()=>setTobad()} />
            <Header text = "Statistics" />
            <Statistics  good = {good} bad={bad} neutral ={neutral} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))