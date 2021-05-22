function log(user, acao) {
    const connection = require('../dataBase/connection')
    const currentDate = require('../helpers/date')
    const sql = `INSERT INTO LOG SET ?`
    let info = {
        user: user,
        acao: acao,
        data_alteracao: currentDate()
    }
    connection.query(sql, info, (error, result) => {
        if (error) {
            console.log(error)
        }
    })
}
module.exports = log