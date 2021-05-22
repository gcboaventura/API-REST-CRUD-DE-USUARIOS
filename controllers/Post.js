const registerUser = require('../models/User/RegisterUser')
const login = require('../models/Login/Login')
const tokenLogin = require('../middleware/tokenLogin')
const authorization = require('../services/authorization')

module.exports = (app) => {

    app.post('/Login', (request, response) => {
        login(request.body, response)
    })

    app.post('/User', [tokenLogin, authorization(['administrador'])], (request, response) => {
        const responsible = request.user.email
        let info = { user: responsible, create: request.body }
        registerUser(info, response)
    })
}