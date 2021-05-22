function encrypt(password) {
    const bcrypt = require('bcrypt')
    const custoHash = 12
    return bcrypt.hash(password, custoHash)
}
module.exports = encrypt