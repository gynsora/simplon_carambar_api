# 📚 API Blagues

Une API RESTful en Node.js pour gérer une collection de blagues, avec stockage en base SQLite, documentation Swagger et ORM Sequelize.

---
##  Endpoint principaux

| Méthode |            URL    | Description                       |
| ------: | -------------:    | ----------------------------------|
|     GET |        `/blagues` | Liste toutes les blagues          |
|     GET | `/blagues/random` | Obtenir une blague par au hasard  |
|     GET |    `/blagues/:id` | Obtenir une blague par ID         |
|    POST |        `/blagues` | Ajouter une nouvelle blague       |
|    GET  |       `/api-docs` | Tester l'api                      |

---

## ⚙️ Technologies utilisées

- Node.js
- Express
- Sequelize
- SQLite
- Swagger (via swagger-jsdoc et swagger-ui-express)

---


