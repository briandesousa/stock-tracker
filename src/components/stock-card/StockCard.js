import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class StockCard extends React.Component {

    render() {
        if (!this.props.stock) {
            return (
                <p>No stock information provided.</p>
            );
        }

        let currencyFormat = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        });

        let dateFormat = new Intl.DateTimeFormat('en-CA', {
            dateStyle: 'medium'
        });

        const marketValue = currencyFormat.format(this.props.stock.market.value);
        const valueDate = dateFormat.format(Date.parse(this.props.stock.market.valueDate));
        const purchaseDate = dateFormat.format(Date.parse(this.props.stock.book.purchaseDate));
        const totalDividends = currencyFormat.format(this.props.stock.totalDividends);
        const marketValueWithDividends = currencyFormat.format(this.props.stock.market.valueWithDividends);

        return (
            <Card border="#DDD">
                <Card.Header>
                    <Card.Title>
                        {this.props.stock.name}
                        <Badge className="ml-2" variant="success">{this.props.stock.symbol}</Badge>
                    </Card.Title>
                    <Card.Subtitle>
                        {marketValue}
                        <span className="text-muted"> as of {valueDate}</span>
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body style={{ padding: '0px' }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><strong>Stock Count</strong></td>
                                <td>{this.props.stock.count}</td>
                            </tr>
                            <tr>
                                <td><strong>Book Value</strong></td>
                                <td>
                                    {currencyFormat.format(this.props.stock.book.value)}
                                    <div className="text-muted">purchased {purchaseDate}</div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Total Dividends</strong></td>
                                <td>{totalDividends}</td>
                            </tr>
                            <tr>
                                <td><strong>Market Value + Dividends</strong></td>
                                <td>{marketValueWithDividends}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <Button to={'/stock/' + this.props.stock.symbol} as={Link}>View Details</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        );
    }
}

export default StockCard;