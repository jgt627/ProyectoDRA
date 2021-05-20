const { Router } = require('express');
const router = Router();
const ingrediente = require('../controladores/ingredienteControlador');

/** 
 * Descripción: Si llega un get, un post o un delete, serán reenviados.
 */
router.route('/')
    .get(ingrediente.getAll)
    .post(ingrediente.createIngrediente)
    .delete(ingrediente.deleteAll)

router.route('/:id')
    .get(ingrediente.getIngrediente)
    //.put(ingrediente.cupdateIngrediente)
    .delete(ingrediente.deleteIngrediente)
module.exports = router;