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
            symbol: 'ENB',
            book: {
                value: '40.00',
                count: 100
            },
            market: {
                value: '45.10',
                valueDate: '31/10/2019'
            }
        },
        {
            symbol: 'TD',
            book: {
                value: '72.00',
                count: 20
            },
            market: {
                value: '75.40',
                valueDate: '31/10/2019'
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