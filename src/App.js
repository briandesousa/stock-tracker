import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

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
      <div>
        <Jumbotron>
          <h1>{this.state.greeting}</h1>
          <p>Welcome to the Stock Tracker App!</p>
          <p>
            <Button variant="primary">Add a Stock</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default App;
