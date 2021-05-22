const jwt = require('jsonwebtoken')
const authentication = require('../errors/login')

module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.token_env)
        req.user = decode
        next()
        
    } catch (error) {
        return res.status(401).json(authentication)
    }
}