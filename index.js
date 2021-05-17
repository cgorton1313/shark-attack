const config = require(__dirname + '/config.js');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/attacks', (req, res) => {
  res.json([
    ['Great White', 6],
    ['Hammerhead', 3],
    ['Whale Shark', 4],
    ['Basking', 2],
    ['Tiger Shark', 5]
  ])
})


app.listen(config.app.port, () => {
    console.log('Server running on port ' + config.app.port);
})

app.use(express.static(path.join( __dirname+ '/public')));