const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)


module.exports = {
    initDataBase: async (sequelize) => {
        const db = {}
        fs.readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
        })
        .forEach(file =>{
            const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
            db[model.name] = model
        })

        Object.keys(db).forEach(modelName=>{
            if(db[modelName].associate){
                db[modelName].associate(db)
            }
        })

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        /**asociaciones */

        db.perfil.hasMany(db.usuario, {foreignKey: "fk_perfil"})
        db.usuario.belongsTo(db.perfil, {foreignKey: "fk_perfil"})

        return db
    }
}