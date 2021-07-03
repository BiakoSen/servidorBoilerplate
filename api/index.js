const expres = require('express')
const userRouter = require('./routes/users.routes')

const routes = () => {
    const app = expres()
    userRouter(app)
    return app

}

module.exports = routes;