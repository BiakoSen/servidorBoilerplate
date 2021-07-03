require('dotenv').config()

module.exports = {
    PORT : process.env.PORT || 5200,
    DB: {
        NAME: process.env.DBNAME,
        HOST: process.env.DBHOST,
        PASSWORD: process.env.DBPASS,
        DIALECT: process.env.DBDIALECT || 'mysql'
    }
}