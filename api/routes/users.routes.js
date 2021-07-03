const router = require('express').Router()
const { getAllUsers, createUser, updateUser, validateUser } = require('../../controllers/users.controller')

module.exports = (app) => {
    app.use('/users', router)

    router.get('/', getAllUsers)
    router.post('/auth', validateUser)
    router.post('/', createUser)
    router.put('/', updateUser)
}
