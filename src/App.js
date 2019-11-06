import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
  }

  render() {
    fetch('/api?name=Steve')
      .then(response => response.json())
      .then(state => this.setState(state));

    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.greeting}</p>
        </header>
      </div>
    )
  }
}

export default App;
