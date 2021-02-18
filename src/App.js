// create your App component here
import React, { Component } from 'react'

class App extends Component {
    state = {
        peopleSpaceList: []

    }
    render() {
        return (
            <div>
            {this.state.peopleSpaceList.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(({people}) => this.setState({ peopleSpaceList: people }))
    }
}
export default App