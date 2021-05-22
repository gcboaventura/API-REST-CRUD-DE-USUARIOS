module.exports = (connection) => {

    (async () => {
        await User()
        await Log()
    })()
    
    function User() {
        let nameTable = "USER"
        const sql = `CREATE TABLE IF NOT EXISTS ${nameTable} (
            ID INT NOT NULL AUTO_INCREMENT,
            NOME VARCHAR (500),
            EMAIL VARCHAR (100),
            SENHA VARCHAR (300),
            TELEFONE VARCHAR (100),
            SETOR VARCHAR (100),
            CARGO VARCHAR (100),
            DATA_CRIACAO datetime NOT NULL,
            PRIMARY KEY (ID))`

        create(sql, nameTable)
    }

    function Log(){
        let nameTable = "LOG"
        const sql = `CREATE TABLE IF NOT EXISTS ${nameTable} (
            ID INT NOT NULL AUTO_INCREMENT,
            USER VARCHAR (100),
            ACAO VARCHAR(500),
            DATA_ALTERACAO DATETIME NOT NULL,
            PRIMARY KEY (ID))`

            create(sql, nameTable)
    }

    function create(sql, nameTable) {
        connection.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(`${nameTable} TABLE SUCCESSFULLY CREATED !`)
            }
        })
    }
}