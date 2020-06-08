const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('usuario', {
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_proprio: DataTypes.STRING,
    senha: DataTypes.STRING
},
    {timestamps: false

});

module.exports = User;

