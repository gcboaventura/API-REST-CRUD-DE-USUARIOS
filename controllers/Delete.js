const tokenLogin = require('../middleware/tokenLogin')
const authorization = require('../services/authorization')
const deleteUser = require('../models/User/deleteUser')

module.exports = (app) => {

    app.delete('/User/:id', [tokenLogin, authorization(['administrador'])], (request, response) => {
        const deletedUser = { deleted: request.params.id }
        const responsible = { user: request.user.email }
        const info = [responsible, deletedUser]
        console.log(info)
        deleteUser(info, response)
    })
}