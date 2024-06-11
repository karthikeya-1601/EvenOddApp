import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const rand = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + rand}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="cont">
        <div className="block">
          <h1>
            Count <span>{count}</span>
          </h1>
          <p>Count is {text}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
