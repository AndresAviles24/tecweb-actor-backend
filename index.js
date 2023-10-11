// index.js

const express = require('express');
const bodyParser = require('body-parser');
const actorRoutes = require('./routes/actors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/actors', actorRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
