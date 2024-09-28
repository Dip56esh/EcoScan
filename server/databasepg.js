const {Client} = require('pg');

// const client = new Client({
//     host : "localhost",
//     user : "postgres",
//     port : 5432,
//     password : "root",
//     database : "EcoScan"
// })
const client = new Client({
user: "postgres",
host: "junction.proxy.rlwy.net",
port: 27239,
database: "railway",
password: "SNlZFOrgvqzTuDNVCiounQbNQAzQVLSu"
})

client.connect();

module.exports = client