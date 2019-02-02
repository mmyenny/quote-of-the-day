import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote:
        'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.'
    }
  }

  render() {
    return (
      <div>
        <h1>Quote of the Day</h1>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}

export default App
