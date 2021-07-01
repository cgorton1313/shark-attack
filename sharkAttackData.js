const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath: 'sharkAttack.log',
        timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
    },
    log = SimpleNodeLogger.createSimpleLogger(opts);

const HOST = process.env.HOST || 'us-cdbr-east-04.cleardb.com';
const USER = process.env.USER || 'b592502e80f8e1';
const PASSWORD = process.env.PASSWORD || '8faf8617';
const DATABASE = process.env.DATABASE || 'heroku_93866080671e8bc';

//mysql://b592502e80f8e1:8faf8617@us-cdbr-east-04.cleardb.com/heroku_93866080671e8bc?reconnect=true

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
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    });

    connection.connect(function(err) {
        if (err) {
            log.info('error when connectin to db:', err);
        } else {
            log.info('Connected to database ' + DATABASE + ' as user ' + USER);
        }
    });
    let query = util.promisify(connection.query).bind(connection);

    let result;
    try {
        result = await query(sql);
    } catch (err) {
        log.info(err);
        result = '{Error}'
    }
    connection.end();

    return result;
}

async function numFatalities() {
    let sql = `
select attackCount.common_name, numFatals, numAttacks, (numFatals / numAttacks) as percentFatal
from (
select common_name, count(attack_id) as numAttacks
from attacks, species
where species.species_id = attacks.species_id
group by common_name) as attackCount
left join
(select common_name, count(attack_id) as numFatals
from attacks, species
where species.species_id = attacks.species_id
and fatal = 'Y'
group by common_name) as fatalCount
on attackCount.common_name = fatalCount.common_name
order by percentFatal desc;
`
    let result = await getQueryData(sql);
    return result;
}

module.exports = {
    getAttacks,
    getCountryTotalAttacks,
    numFatalities
}