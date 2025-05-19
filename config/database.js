const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'blagues.sqlite', // <-- fichier où les données sont sauvegardées
  logging: false,
});

module.exports = sequelize;