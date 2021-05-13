const config = require(__dirname + '/config.js');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(config.app.port, () => {
    console.log('Server running on port ' + config.app.port);
})

app.use(express.static(path.join( __dirname+ '/public')));