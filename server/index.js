const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', function (req, res) {
    let name = req.query.name || 'World';

    if (name === 'Brian') {
        name = `Mr. ${name}`;
    } else if (name === 'Mary') {
        name = `Mrs. ${name}`;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Express server is running on localhost:${PORT}`);
});