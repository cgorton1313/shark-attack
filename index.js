const config = require(__dirname + '/config.js');
const sharkAttackData = require(__dirname + '/sharkAttackData.js')
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  })

app.get('/attacks', async function (req, res) {
  res.json(await sharkAttackData.getAttacks());
})

app.get('/countryTotal', async function (req, res) {
  res.json(await sharkAttackData.getCountryTotalAttacks());
})

app.get('/numberOfFatalities', async function (req, res) {
  res.json(await sharkAttackData.numFatalities());
})


app.listen(config.app.port, () => {
    console.log('Server running on port ' + config.app.port);
})

app.use(express.static(path.join( __dirname+ '/public')));