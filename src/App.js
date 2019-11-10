import React from 'react';
import './App.css';
import Header from './components/header/Header';
import StockCard from './components/stock-card/StockCard';
import CardColumns from 'react-bootstrap/CardColumns';

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
    let stockCards = [];
    this.state.stocks.forEach(stock => {
      stockCards.push(
        <StockCard stock={stock} key={stock.symbol}></StockCard>
      );
    });

    return (
      <div>
        <Header
          isLoggedIn={!!this.state.username}
          firstName={this.state.firstName}
          lastName={this.state.lastName}>
        </Header>
        <div>
          <CardColumns className="p-3">
            {stockCards}
          </CardColumns>
        </div>
      </div>
    )
  }
}

export default App;
