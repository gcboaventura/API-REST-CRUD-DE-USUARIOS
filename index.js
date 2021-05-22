function server() {
    // DATABASE CONNECTION TEST
    require('./dataBase/test')

    // ENVIRONMENT VARIABLES
    const enviromentVariables = {
        serverPort:  process.env.serverPort_env, 
        dataBaseHost: process.env.hostDataBase_env,
        nameDataBase: process.env.nameDataBase_env,
        userDataBase: process.env.userDataBase_env,
        passwordDataBase: process.env.passwordDataBase_env,
        portDataBase: process.env.portDataBase_env,
        token: process.env.token_env 
    }
    console.log(enviromentVariables)

    // SERVER SETTINGS
    const custom = require('./config/custom')
    const port = process.env.serverPort_env
    const app = custom()

    // SERVER EXECUTION
    app.listen(port, () => {
        console.log(`SERVER IS RUNNING ON PORT: ${port}`)
    })
}
server()