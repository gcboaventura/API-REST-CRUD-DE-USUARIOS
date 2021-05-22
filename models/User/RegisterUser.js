module.exports = function registerUser(request, response) {
    const connection = require('../../dataBase/connection')
    const encrypt = require('../../helpers/encrypt')
    const currentDate = require('../../helpers/date')
    const errorDuplicateUser = require('../../errors/errorDuplicateUser')
    const log = require('../../helpers/log')

    let duplicateUser = `SELECT * FROM USER WHERE EMAIL="${request.create.email}"`
    connection.query(duplicateUser, (error, result) => {
        if (error) {
            response.status(400).json(error)
        } else {
            if (result.length != 0) {
                response.status(401).json(errorDuplicateUser)
            } else {
                insert()
            }
        }
    })

    async function insert() {
        let senhaHash = await encrypt(request.create.senha)
        request.create.senha = senhaHash
        request.create.data_criacao = currentDate()
        const sql = `INSERT INTO USER SET ?`
        connection.query(sql, request.create, (error, result) => {
            if (error) {
                response.status(400).json(error)
            } else {
                response.status(201).json(request.create)
                const action = `CRIOU O USUARIO: ${request.create.email}`
                log(request.user, action)
            }
        })
    }
}