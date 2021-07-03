'use strict'
module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('usuario', {
        idusuario: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        isactive: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        },
        fk_perfil: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: { model: 'perfil', key: 'idperfil', as: 'fk_perfil' },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        },
    },
    {
        modelName: 'usuario',
        freezeTableName: true,
        timestamps: false
    }
    
    )
}