const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/user/:username', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        userId: Math.floor(Math.random() * Math.floor(100)),
        username: req.params.username,
        firstName: 'Brian',
        lastName: 'De Sousa',
    }));
});

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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Express server is running on localhost:${PORT}`);
});