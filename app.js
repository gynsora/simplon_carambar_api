const express = require('express');
const app = express();
const blagueRoutes = require('./routes/blagueRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swaggerConfig');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/', blagueRoutes);

module.exports = app;