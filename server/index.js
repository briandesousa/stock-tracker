const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

// server the React UI
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// get user information
app.get('/api/user/:username', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        userId: Math.floor(Math.random() * Math.floor(100)),
        username: req.params.username,
        firstName: 'Brian',
        lastName: 'De Sousa',
    }));
});

// get portfolio information for a given user
app.get('/api/user/:username/stocks', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    let stocks = [];
    if (req.params.username === 'briandesousa') {
        stocks = [{
            name: "Enbridge Inc.",
            symbol: 'ENB',
            count: 100,
            totalDividends: '100.00',
            book: {
                value: '4260.00',
                purchaseDate: '2018-10-31'
            },
            market: {
                value: '4503.10',
                valueWithDividends: '4603.10',
                valueDate: '2019-10-31'
            }
        },
        {
            name: 'Toronto-Dominion Bank',
            symbol: 'TD',
            count: 20,
            totalDividends: '100.00',
            book: {
                value: '7285.00',
                purchaseDate: '2018-10-31'
            },
            market: {
                value: '7563.40',
                valueWithDividends: '7663.40',
                valueDate: '2019-10-31'
            }
        }];
    }

    res.send(JSON.stringify({
        'stocks': stocks
    }));
});

// get individual stock information for a given user and stock
app.get('/api/user/:username/stock/:symbol', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({
        symbol: req.params.symbol,
        marketValue: '45.03',
        nextDividendDate: '2019-11-01',
        nextDividendAmount: '0.67',
        dividendPayoutHistory: [{
            dividendDate: '2019-08-01',
            dividendAmount: '34.00'
        }, {
            dividendDate: '2019-05-01',
            dividendAmount: '24.00'
        }]
    }));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Express server is running on localhost:${PORT}`);
});