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
        'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      )
      .then(response => {
        console.log(response.data)
        this.setState({
          quote: response.data.content
        })
      })
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
