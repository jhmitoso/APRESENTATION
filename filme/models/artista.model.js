const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Artista = sequelize.define(
  'Artista', 
  {
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'Artistas',
    timestamps: true
  }
);

module.exports = Artista;