const Mysql = require('sync-mysql')

const connection = new Mysql({
    host: "68.66.216.18",
    user: "penguinh_sharkattack",
    password: "aph_sharkattack!",
    database: "penguinh_sharkattack"
})

let species = connection.query('SELECT * from species')
let attacks = connection.query('SELECT * from attacks')


for (let i = 0; i < attacks.length; i++) {
    //console.log(attacks[i].attack_id, attacks[i].species);  
    let match = 'none'; 
    let attackSpecies = attacks[i].species.toLowerCase();
    for (let j = 0; j < species.length; j++) {
       if (attackSpecies.includes(species[j].common_name)) {
            match = species[j].common_name;
        }  
    }
    console.log(attacks[i].attack_id + ' ' + attackSpecies +' Attack species was ' + match);
}

