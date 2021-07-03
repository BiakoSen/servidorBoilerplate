const { json, urlencoded } = require('express')
const cors = require('cors')
const { initDataBase } = require('../models')
const {sequelizeConfig} = require('../config/index')
const routes = require('../api')
const morgan = require('morgan')
const publicIp = require('public-ip')

module.exports = async (app) => {
    if(!app){
        console.log('not app')
        return null
    }

    //app.enable('trust proxy')
    app.use(cors({origin: '*'}))
    app.use(json())
    app.use(urlencoded({extended: false}))
    app.use(morgan('dev'))
    
    app.get('/', async (_, res)=>res.send(await publicIp.v4()))
    app.use('/api', routes())

    return app;
}
