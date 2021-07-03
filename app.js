const expres = require('express')
const loaders = require('./loaders/index')
const { PORT } = require('./config/vars.config')


async function startServer(){
    const app = expres()
    await loaders.init({expressApp: app})

    app.listen(PORT, err=>{
        if(err){
            console.log(err)
        }

        console.log('Server is running on port:', PORT)
    })
}


startServer();