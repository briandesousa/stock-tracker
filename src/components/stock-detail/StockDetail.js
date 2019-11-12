import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class StockDetail extends React.Component {

    render() {
        const { symbol } = this.props.match.params;

        return (
            <div>
                <p>Stock detail page for {symbol}</p>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </div>
        );
    }
}

export default withRouter(StockDetail);