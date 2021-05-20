const mongoose = require('mongoose');

/** 
 * Descripción: Estrucutra del objeto "Categoria" en la base de datos de MongoDB.
 */
const categoriaSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    recetas: [Number],
    URLimagen: String
});

module.exports = mongoose.model('Categoria', categoriaSchema);