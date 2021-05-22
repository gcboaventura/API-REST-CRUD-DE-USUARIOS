function sendToken(result) {
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
        id: result.ID,
        email: result.EMAIL,
        cargo: result.CARGO,
        setor: result.SETOR
    }, process.env.token_env, { expiresIn: '1h' })
    return token
}
module.exports = sendToken