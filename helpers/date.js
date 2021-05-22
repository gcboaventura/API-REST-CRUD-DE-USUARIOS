const moment = require('moment')

module.exports = function userForDatabase(date) {
    return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD')
}

module.exports = function databaseForUser(date) {
    return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')
}

module.exports = function currentDate() {
    return moment().format('YYYY-MM-DD H:mm:ss ')
}