module.exports = (authorized) => (request, response, next) => {
    const errorRegisterUserUnauthorized = require('../errors/user')
    if (authorized.indexOf(request.user.cargo) === -1) {
        response.status(401).json(errorRegisterUserUnauthorized)
    } else {
        next()
    }
}