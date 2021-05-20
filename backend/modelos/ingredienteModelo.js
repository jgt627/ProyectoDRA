const mongoose = require('mongoose');
const sql = require('mysql');

/** 
 * Descripción: Estrucutra del objeto "Ingrediente" en la base de datos de MongoDB.
 */
const ingredienteSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    URLimagen: String
});

module.exports = mongoose.model('Ingrediente', ingredienteSchema);