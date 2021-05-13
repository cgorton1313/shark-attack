const Mysql = require('sync-mysql')

const connection = new Mysql({
    host: "68.66.216.18",
    user: "penguinh_sharkattack",
    password: "aph_sharkattack!",
    database: "penguinh_sharkattack"
})

let species = connection.query('SELECT * from species')
console.log(species)