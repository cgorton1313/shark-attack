const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath: 'sharkAttack.log',
        timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
    },
    log = SimpleNodeLogger.createSimpleLogger(opts);

const PORT = process.env.PORT || 62001;
const sharkAttackData = require(__dirname + '/sharkAttackData.js');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/attacks', async function(req, res) {
    res.json(await sharkAttackData.getAttacks());
});

app.get('/countryTotal', async function(req, res) {
    res.json(await sharkAttackData.getCountryTotalAttacks());
});

app.get('/numberOfFatalities', async function(req, res) {
    res.json(await sharkAttackData.numFatalities());
});

app.listen(PORT, () => {
    log.info('Server running on port ' + PORT);
});