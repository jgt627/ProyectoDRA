const { Router } = require('express');
const router = Router();
const receta = require('../controladores/recetaControlador');

/** 
 * Descripción: Si llega un get, un post o un delete, serán reenviados.
 */
router.route('/')
    .get(receta.getAll)
    .post(receta.createReceta)
    .delete(receta.deleteAll)

router.route('/:id')
    .get(receta.getReceta)
    //.put(receta.cupdateReceta)
    .delete(receta.deleteReceta)
module.exports = router;