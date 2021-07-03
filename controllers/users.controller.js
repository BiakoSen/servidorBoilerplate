const { sequelizeConfig } = require('../config/index')
const { initDataBase } = require('../models')


const getAllUsers = [
    async (req, res) => {
        try {
            const database = await initDataBase(sequelizeConfig)

            const users = await database.usuario.findAll({ where: {isactive: 1} })

            res.send({ success: true, users })

        } catch (error) {

            res.send({ error: true, message: error })
        }
    }
]

const createUser = [
    async (req, res) => {
        try {
            const { username, password, email } = req.body;
            const database = await initDataBase(sequelizeConfig)

            const fk_perfil = 1

            const user = await database.usuario.create({ username, password, email, fk_perfil })

            res.send({ success: true, message: 'User has been created', user })

        } catch (error) {

            res.send({ error: true, message: error })
        }
    }
]

const validateUser = [
    async (req, res) => {
        console.log('entra')
        try {
            const { username, password } = req.body;
            const database = await initDataBase(sequelizeConfig)

            const responseLogin = await database.usuario.findOne({
                where: {
                    username: username,
                    password: password
                }
            })

            console.log(responseLogin)

            if (!responseLogin) {
                res.send({ error: true, message: 'wrong credentials' })
            } else {
                res.send({ success: true, data: responseLogin.dataValues })
            }

        } catch (error) {

            res.send({ error: true, message: error.toString() })
        }
    }
]

const updateUser = [
    async (req, res) => {
        try {
            const { isactive, idusuario } = req.body;
            const database = await initDataBase(sequelizeConfig)

            const user = await database.usuario.update({ isactive }, { where: { idusuario } })

            res.send({ success: true, message: 'User has been updated', user })

        } catch (error) {

            res.send({ error: true, message: error })
        }
    }
]

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    validateUser
}