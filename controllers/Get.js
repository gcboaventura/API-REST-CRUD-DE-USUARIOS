const displayUser = require('../models/User/getAllUser')
const tokenLogin = require('../middleware/tokenLogin')
const displayUserById = require('../models/User/getUserWhereId')

module.exports = (app) => {

    app.get('/User', tokenLogin, (request, response) => {
        let info = { user: request.user.email, views: request }
        displayUser(info, response)
    })

    app.get('/User/:id', tokenLogin, (request, response) => {
        let info = { user: request.user.email, id: request.params.id }
        displayUserById(info, response)
    })
}