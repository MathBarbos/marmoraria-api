const express = require('express');
const connectDB = require('./src/config/database');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(express.json()).use(cors());

const contactRoutes = require('./src/routes/contactRoutes')

app.use(contactRoutes);

connectDB
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Falha ao conectar ao banco de dados:', err);
    });