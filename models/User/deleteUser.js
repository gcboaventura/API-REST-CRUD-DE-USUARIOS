module.exports = function deleteUser(request, response) {
    const connection = require('../../dataBase/connection')
    const log = require('../../helpers/log')
    const sql = `DELETE FROM USER WHERE ID="${request[1].deleted}"`
    const sqlName = `SELECT * FROM USER WHERE ID="${request[1].deleted}"`
    connection.query(sqlName, (error, resultName) => {
        if (error) {
            response.status(400).json(error)
        } else {
            connection.query(sql, (error, result) => {
                if (error) {
                    response.status(400).json(error)
                } else {
                    response.status(200).json({ "message": "Success." })
                    const action = `DELETOU O USUARIO: ${resultName[0].EMAIL}`
                    log(request[0].user, action)
                }
            })
        }
    })
}