const connection = require('../../dataBase/connection')
const authentication = require('../../errors/login')
const decrypt = require('../../helpers/decrypt')
const sendToken = require('../../helpers/token')
const log = require('../../helpers/log')

function verifyEmail(request, response) {
    let sql = `SELECT * FROM USER WHERE EMAIL= ?`
    connection.query(sql, request.email, (error, result) => {
        if (error) {
            response.status(400).json(error)
        } else {
            if (result.length < 1) {
                response.status(401).json(authentication)
            } else {
                if (decrypt(request.senha, result[0].SENHA, response) === true) {
                    const token = sendToken(result[0])
                    const action = `FEZ LOGIN NO SISTEMA.`
                    log(result[0].EMAIL, action)
                    response.status(200).json({ token })
                } else {
                    console.log(decrypt(request.senha, result[0].SENHA, response))
                    response.status(401).json(authentication)
                }
            }
        }
    })
}
module.exports = verifyEmail