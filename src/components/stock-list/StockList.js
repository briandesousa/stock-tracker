import React from 'react';

class StockList extends React.Component {

    render() {
        if (this.props.stocks.stocks === 0) {
            return (
                <p>You haven't added any stocks yet.</p>
            );
        }

        let tableRows = [];
        for (let i = 0; i < this.props.stocks.length; i++) {
            const stock = this.props.stocks[i];
            console.log(stock);
            tableRows.push(
                <tr>
                    <td>{stock.symbol}</td>
                    <td>{stock.book.count}</td>
                    <td>{stock.book.value}</td>
                    <td>{stock.market.value}</td>
                    <td>{stock.market.valueDate}</td>
                </tr>
            );
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Count</th>
                        <th>Book Value</th>
                        <th>Market Value</th>
                        <th>Market Value Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        );
    }
}

export default StockList;