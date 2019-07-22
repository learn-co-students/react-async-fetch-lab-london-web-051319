// create your App component here

import React, { Component } from 'react';

export default class App extends Component {

    state = {
      data: []
    }

  // componentDidMount = async () => {
  //   const dataRaw = await fetch('http://api.open-notify.org/astros.json');
  //   const dataJSON = await dataRaw.json();
  //   this.setState({data: dataJSON.people});
  // }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(data => data.json())
    .then(results => this.setState({data: results.people}))
  }

  render() {
    return (
      <div>
        {this.state.data.map((person, i) => 
        <div key={i} className="card">
          <h1>{person.name}</h1>
        </div>
        )}
      </div>
    )
  }
}

