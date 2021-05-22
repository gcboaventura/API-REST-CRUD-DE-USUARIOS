function decrypt(senha, senhaHash, response) {
    const authentication = require('../errors/login')
    const bcrypt = require('bcrypt')
    const passwordHash = bcrypt.compareSync(senha, senhaHash, (error, result) => {
        if (error) {
            response.status(401).json(authentication)
        } else {
            return result
        }
    })
    return passwordHash
}
module.exports = decrypt