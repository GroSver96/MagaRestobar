const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'maga_admin',
  password: '1234', // Coloca tu contraseña si tienes
  database: 'maga_restobar_db'
});

// Conexión a la base de datos
db.connect(err => {
  if (err) {
    console.log('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Conexión exitosa desde el backend' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend Maga Restobar corriendo en http://localhost:${PORT}`);
});
