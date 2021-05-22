module.exports = async function changeUser(info, response) {
    const connection = require('../../dataBase/connection')
    const encrypt = require('../../helpers/encrypt')
    const log = require('../../helpers/log')
    let password = await encrypt(info[1].senha)
    info[1].senha = password
    const sql = `UPDATE USER SET ? WHERE ID=${info[1].id}`
    connection.query(sql, info[1], (error, result) => {
        if (error) {
            response.status(400).json(error)
        } else {
            response.status(200).json({ "message": "Success." })
            action = `ALTEROU INFORMACOES DO USUARIO: ${info[1].email}`
            log(info[0].user, action)
        }
    })
}