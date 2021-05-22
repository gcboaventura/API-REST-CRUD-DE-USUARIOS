module.exports = function displayUserById(request, response) {
    const connection = require('../../dataBase/connection')
    const log = require('../../helpers/log')
    const sql = `SELECT * FROM USER WHERE ID="${request.id}"`
    connection.query(sql, (error, result) => {
        let user = result[0]
        if (error) {
            response.status(400).json(error)
        } else {
            response.status(200).json(user)
            const action = `VISUALIZOU O USUARIO: ${result[0].EMAIL}`
            log(request.user, action)
        }
    })
}