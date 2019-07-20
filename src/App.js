// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }

  render() {
    return(
      <div>
        <h1>People in space right now:</h1>
        {this.state.people.map(people => 
          <li key={people.name}>{people.name}</li>
        )}
      </div>
    )
  }
}

export default App