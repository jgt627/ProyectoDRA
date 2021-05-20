const { Router } = require('express');
const router = Router();
const categoria = require('../controladores/categoriaControlador');

/** 
 * Descripción: Si llega un get, un post o un delete, serán reenviados.
 */
router.route('/')
    .get(categoria.getAll)
    .post(categoria.createCategoria)
    .delete(categoria.deleteAll)

router.route('/:id')
    .get(categoria.getCategoria)
    .put(categoria.updateCategoria)
    .delete(categoria.deleteCategoria)
module.exports = router;