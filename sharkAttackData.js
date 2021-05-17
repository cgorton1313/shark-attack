const config = require('./config.js');
const mysql = require('mysql');
const util = require('util');

async function functionName() {
    let sql = 'select * from attacks';
    let result = await getQueryData(sql);
    return result;
}

