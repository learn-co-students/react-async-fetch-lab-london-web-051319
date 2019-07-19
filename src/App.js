import React from 'react'

class App extends React.Component {

  state = {
    astros: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(astros => this.setState({ astros }))
  }


}

export default App