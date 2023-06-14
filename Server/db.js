const Pool = require('pg').Pool
// require('dotenv').config()

const pool = new Pool({
    // user : process.env.USERNAME,
    // password:process.env.PASSWORD,
    // host:process.env.HOST,
    // port:process.env.DBPORT,
    user: "postgres",
    password: "kinleypemo604",
    host: "localhost",
    port: 2402,
    database:'admin'
})

module.exports = pool