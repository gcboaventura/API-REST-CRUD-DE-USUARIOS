const connection = require('./connection')
const create = require('./createTable')
connection.connect((err) => {
    try {
        console.log(`SUCCESSFULLY CONNECTED TO THE DATABASE :D`)
        create(connection)
    } catch {
        console.log(`ERROR CONNECTING TO THE DATABASE :( ${err}`)
    }
})