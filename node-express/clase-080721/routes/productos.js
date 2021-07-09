const express = require('express')
const router = express.Router()

const controller = require('../controllers/productos')

const isLogin = (request, response, next) => {
    if(!request.session.user_id) {
        response.redirect('/login')
    }

    next()
}

router.get('/productos', isLogin, controller.index)
router.get('/productos/create', controller.create)
router.post('/productos/store', controller.store)
router.get('/productos/:id', controller.show)
/* ruta al formulario para editar un elemento existente */
router.get('/productos/:id/edit', controller.edit)
router.put('/productos/update', controller.update)
router.delete('/productos/:id/delete', controller.delete)



/* exportamos el modulo router */
module.exports = router