const app = require('./app');
const sequelize = require('./config/database');
const Blague = require('./models/blague');

const PORT = 3000;

(async () => {
  try {
    await sequelize.sync({ force: false }); // crée le fichier blagues.sqlite s'il n'existe pas
    console.log('Base de données synchronisée.');
    app.listen(PORT, () => {
      console.log(`Serveur sur http://localhost:${PORT}`);
      console.log(`Swagger sur http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('Erreur :', err);
  }
})();