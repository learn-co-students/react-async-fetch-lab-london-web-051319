import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => this.setState({data}))
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>people</h2>
        <ul>
          { data ? data.people.map(person => <li>{ person.name }</li>) : <div></div> }
        </ul>
      </div>
    );
  }
}
