import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: ''
    }
  }

  componentDidMount = () => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en'
      )
      .then(response => {
        console.log(response.data.quoteText)
        this.setState({
          quote: response.data.quoteText
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Quote of the Day</h1>
        {/* <p>
          "If you are not willing to risk the unusual, you will have to settle
          for the ordinary."
        </p> */}
        <p>{this.state.quote}</p>
      </div>
    )
  }
}

export default App
