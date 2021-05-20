const Ingrediente = require('../modelos/ingredienteModelo');
const ingredienteCtrl = {};


ingredienteCtrl.getAll = async(req, res) => {
    const ingredientes = await Ingrediente.find();
    res.json(ingredientes);
}

ingredienteCtrl.getIngrediente = async(req, res) => {
    const ingredientes = await Ingrediente.findById(req.params.id);
    res.json(ingredientes);
}

ingredienteCtrl.createIngrediente = async(req, res) => {
    const { _id, nombre, URLimagen } = req.body;

    const newIngrediente = new Ingrediente({
        _id: _id,
        nombre: nombre,
        URLimagen: URLimagen
    });

    await newIngrediente.save();

    res.end();
}

ingredienteCtrl.updateIngrediente = async(req, res) => {
    res.end();
}

ingredienteCtrl.deleteAll = async(req, res) => {
    await Ingrediente.deleteMany({});
    res.end();
}

ingredienteCtrl.deleteIngrediente = async(req, res) => {
    await Ingrediente.findByIdAndRemove(req.params.id).then((docs) => {
        res.status(200).send({
            docs
        })
    }).catch((e) => {
        res.status(400)
    });
    res.end();
}

module.exports = ingredienteCtrl;