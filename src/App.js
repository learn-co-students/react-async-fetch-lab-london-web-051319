import React from 'react'

class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(obj => this.setState({people: obj.people}))
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => <div>{person.name} on {person.craft}</div>)}
      </div>
    )
  }
}

export default App
