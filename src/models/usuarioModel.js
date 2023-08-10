const mongoose = require('mongoose');

// Se debe agregar esto para poder usar las variables de .env
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
  id: String,
  nombre: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
