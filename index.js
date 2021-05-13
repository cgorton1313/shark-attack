const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(62000, () => {
    console.log('Server running on port 62000');
})

app.use(express.static(path.join( __dirname+ '/public')));