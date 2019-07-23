// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        spaceMen: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(({people}) => this.setState({ spaceMen: people }))
    }

    render() {
        return (
            <div>
                {this.state.spaceMen.map((person, id) => <p key={id}>{person.name}</p>)}
            </div>
        );
    }
}

export default App;