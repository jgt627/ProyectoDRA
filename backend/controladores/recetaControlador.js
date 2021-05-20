const Receta = require('../modelos/recetaModelo');
const recetaCtrl = {};


recetaCtrl.getAll = async(req, res) => {
    const recetas = await Receta.find();
    res.json(recetas);
}

recetaCtrl.getReceta = async(req, res) => {
    const recetas = await Receta.findById(req.params.id);
    res.json(recetas);
}

recetaCtrl.createReceta = async(req, res) => {
    const { _id, nombre, ingredientes, URLimagen, descripcion, tiempo, creador, categoria } = req.body;

    const newReceta = new Receta({
        _id: _id,
        nombre: nombre,
        ingredientes: ingredientes,
        URLimagen: URLimagen,
        tiempo: tiempo,
        valoracion: 0,
        descripcion: descripcion,
        creador: creador,
        categoria: categoria
    });

    await newReceta.save();

    res.end();
}

recetaCtrl.updateReceta = async(req, res) => {
    res.end();
}

recetaCtrl.deleteAll = async(req, res) => {
    await Receta.deleteMany({});
    res.end();
}

recetaCtrl.deleteReceta = async(req, res) => {
    await Receta.findByIdAndRemove(req.params.id).then((docs) => {
        res.status(200).send({
            docs
        })
    }).catch((e) => {
        res.status(400)
    });
    res.end();
}

module.exports = recetaCtrl;