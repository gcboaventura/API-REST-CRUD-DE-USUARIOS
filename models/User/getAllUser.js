module.exports = function displayUser(request, response) {
    const connection = require('../../dataBase/connection')
    const log = require('../../helpers/log')
    const sql = `SELECT * FROM USER`
    connection.query(sql, (error, result) => {
        if (error) {
            response.status(400).json(error)
        } else {
            response.status(200).json(result)
            const action = `VISUALIZOU TODOS OS USUARIOS.` 
            log(request.user,action)
        }
    })
}