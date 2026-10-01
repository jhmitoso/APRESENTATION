const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Diretor = sequelize.define(
  'Diretor', 
  {
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'Diretores',
    timestamps: true
  }
);

module.exports = Diretor;