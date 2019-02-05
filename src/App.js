import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import loading from './images/loading3.gif'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: null
    }
  }

  componentDidMount = () => {
    this.fetchQuote()
  }

  fetchQuote = () => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
        {
          Origin:
            'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en'
        }
      )
      .then(response => {
        console.log(response.data.quoteText)
        this.setState(
          {
            quote: response.data.quoteText
          },
          () => {
            if (!this.state.quote) {
              this.fetchQuote()
            } else {
              return
            }
          }
        )
      })
  }

  render() {
    if (!this.state.quote) {
      return (
        <div className="loading">
          <img className="loading" alt="" src={loading} />{' '}
        </div>
      )
    }

    return (
      <div className="main">
        <div className="main2">
          <h1>Quote of the Day</h1>
          <div className="line" />
          <p>{this.state.quote}</p>
        </div>
      </div>
    )
  }
}

export default App
