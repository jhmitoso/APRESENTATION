const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const FichaTec = sequelize.define(
  'Ficha Técnica', 
  {
    nome: {
      type: DataTypes.STRING,
    },
    direcao: {
        type: DataTypes.STRING
    },
    artistas:{
        type: DataTypes.STRING
    },
    sumario: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'FichaTec',
    timestamps: true
  }
);

module.exports = FichaTec;