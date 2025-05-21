const express = require('express');
const cors = require('cors');
const app = express();
const blagueRoutes = require('./routes/blagueRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swaggerConfig');

app.use(cors())
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/', blagueRoutes);

module.exports = app;