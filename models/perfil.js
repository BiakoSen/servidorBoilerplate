'use strict'
module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('perfil', {
        idperfil: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        perfil: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        
    },
    {
        modelName: 'perfil',
        freezeTableName: true,
        timestamps: false
    }
    
    )
}