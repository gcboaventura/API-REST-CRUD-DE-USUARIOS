const tokenLogin = require('../middleware/tokenLogin')
const authorization = require('../services/authorization')
const changeUser = require('../models/User/changeUser')

module.exports = (app) => {

    app.patch('/User/:id', [tokenLogin, authorization(['administrador'])], (request, response) => {
        request.body.id = request.params.id
        const valores = request.body
        const responsible = { user: request.user.email }
        const info = [responsible, valores]
        changeUser(info, response)
    })
}