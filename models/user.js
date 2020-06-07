const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('crud_usuario', {
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_proprio: DataTypes.STRING,
    senha: DataTypes.STRING
})

module.exports = User;

