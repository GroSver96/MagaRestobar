const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conexión a la base de datos (aún no usada aquí)
const db = require('./config/db');  // <-- este puede no ser usado todavía, no importa por ahora

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'Conexión exitosa desde el backend' });
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend Maga Restobar corriendo en http://localhost:${PORT}`);
});
