const Categoria = require('../modelos/categoriaModelo');
const categoriaCtrl = {};


categoriaCtrl.getAll = async(req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
}

categoriaCtrl.getCategoria = async(req, res) => {
    const categorias = await Categoria.findById(req.params.id);
    res.json(categorias);
}

categoriaCtrl.createCategoria = async(req, res) => {
    const { _id, nombre, URLimagen, recetas } = req.body;

    const newCategoria = new Categoria({
        _id: _id,
        nombre: nombre,
        recetas: recetas,
        URLimagen: URLimagen
    });

    await newCategoria.save();

    res.end();
}

categoriaCtrl.updateCategoria = async(req, res) => {
    const categoria = await Categoria.findById(req.params.id);

    const { id, nombre, URLimagen, recetas } = req.body;

    categoria.id = id
    categoria.nombre = nombre
    categoria.URLimagen = URLimagen
    categoria.recetas = recetas

    await categoria.save();

    res.end();
}

categoriaCtrl.deleteAll = async(req, res) => {
    await Categoria.deleteMany({});
    res.end();
}

categoriaCtrl.deleteCategoria = async(req, res) => {
    await Categoria.findByIdAndRemove(req.params.id).then((docs) => {
        res.status(200).send({
            docs
        })
    }).catch((e) => {
        res.status(400)
    });
    res.end();
}

module.exports = categoriaCtrl;