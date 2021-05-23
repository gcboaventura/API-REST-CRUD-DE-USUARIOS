module.exports = async function insertAdmin() {
    const sql = `INSERT INTO USER SET ?`
    const connection = require('./connection')
    const currentDate = require('../helpers/date')
    const encrypt = require('../helpers/encrypt')
    const log = require('../helpers/log')
    const admin = {
        nome: 'admin',
        email: 'admin@admin.com.br',
        senha: 'admin',
        telefone: '011999999999',
        setor: 'admin',
        cargo: 'administrador'
    }
    let senhaHash = await encrypt(admin.senha)
    admin.senha = senhaHash
    admin.data_criacao = currentDate()
    const verifyAdmin = `SELECT * FROM USER WHERE EMAIL="${admin.email}"`
    connection.query(verifyAdmin, (error, result) => {
        if (error) {
            console.log(error)
        } else {
            if (result.length != 0) {
                console.log('THE ADMINISTRATOR USER IS ALREADY ACTIVE.')
                log(admin.email,`A APLICAÇÃO FOI REINICIADA.`)
            } else {
                connection.query(sql, admin, (error, result) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('THE ADMINISTRATOR USER WAS CREATED SUCCESSFULLY.')
                        log(admin.email, `O USUARIO ADMINISTRADOR (${admin.email}) FOI CRIADO COM SUCESSO.`)
                    }
                })
            }
        }
    })
}