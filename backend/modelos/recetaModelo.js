const mongoose = require('mongoose');

/** 
 * Descripción: Estrucutra del objeto "Receta" en la base de datos de MongoDB.
 */
const recetaSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    ingredientes: [Number],
    URLimagen: String,
    tiempo: Number,
    valoracion: Number,
    descripcion: String,
    creador: String,
    categoria: Number
});

module.exports = mongoose.model('Receta', recetaSchema);