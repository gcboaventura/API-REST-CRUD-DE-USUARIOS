const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.hostDataBase_env,
    database: process.env.nameDataBase_env,
    user: process.env.userDataBase_env,
    password: process.env.passwordDataBase_env,
    port: process.env.portDataBase_env
})
module.exports = connection