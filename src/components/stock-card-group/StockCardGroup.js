import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import StockCard from '../stock-card/StockCard';

class StockCardGroup extends React.Component {

    render() {
        let stockCards = [];
        this.props.stocks.forEach(stock => {
            stockCards.push(
                <StockCard stock={stock} key={stock.symbol}></StockCard>
            );
        });

        return (
            <CardColumns className="p-3">
                {stockCards}
            </CardColumns>
        );
    }
}

export default StockCardGroup;