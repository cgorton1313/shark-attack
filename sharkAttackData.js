const config = require('./config.js');
const mysql = require('mysql');
const util = require('util');

async function getAttacks() {
    let sql = 'select * from attacks';
    let result = await getQueryData(sql);
    return result;
}

async function getCountryTotalAttacks() {
    let sql = 'SELECT country, COUNT(attack_id) as numAttacks from attacks group by country';
    let result = await getQueryData(sql);
    return result;
}

async function getQueryData(sql) {
    let connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
        });

    connection.connect(function (err) {
        if (err) {
            console.info('error when connectin to db:', err);
        } else {
            console.info('Connected to database ' + config.db.database + ' as user ' + config.db.user);
        }
    });
    let query = util.promisify(connection.query).bind(connection);

    let result;
    try {
        result = await query(sql);
    } catch (err) {
        console.info(err);
        result = '{Error}'
    }
    connection.end();

    return result;
}

module.exports = {
    getAttacks, getCountryTotalAttacks
}