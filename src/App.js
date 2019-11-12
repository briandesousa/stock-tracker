import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';
import Header from './components/header/Header';
import StockCardGroup from './components/stock-card-group/StockCardGroup';
import StockDetail from './components/stock-detail/StockDetail';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'briandesousa',
      firstName: null,
      lastName: null,
      stocks: []
    }

    // fetch initial state
    fetch(`/api/user/${this.state.username}`)
      .then(response => response.json())
      .then(user => {
        this.setState({ ...user });
        fetch(`/api/user/${this.state.username}/stocks`)
          .then(response => response.json())
          .then(stockResponse => this.setState({ ...this.state, stocks: stockResponse.stocks }));
      });
  }

  render() {
    return (
      <Router>
        <Header
          isLoggedIn={!!this.state.username}
          firstName={this.state.firstName}
          lastName={this.state.lastName}>
        </Header>
        <Container fluid="true">
          <Switch>
            <Route path="/stock/:symbol">
              <StockDetail></StockDetail>
            </Route>
            <Route path="/">
              <StockCardGroup stocks={this.state.stocks}></StockCardGroup>
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
