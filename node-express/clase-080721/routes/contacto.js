const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')

router.get('/contacto', (requests, response) => {
    response.render('contacto', {values: {}})
})

router.post('/contacto', [
    /* validacion con express-validator */
    /* estas son las reglas con las que va a disparar un error */
    body('nombre', 'Nombre es requerido y tiene que tener más de 6 caracteres y no ser numero').notEmpty().isLength(6),
    body('email', 'El email tiene que ser valido').notEmpty().isEmail(),
    body('mensajes', 'El mensaje no puede estar vacío').notEmpty()
], (requests, response) => {
    const errors = validationResult(requests)
    console.log(requests.body, errors)
    if (!errors.isEmpty()){
        response.render('contacto', {values: requests.body, errors: errors.array()})
    } else {
        response.redirect('/')
    }
    /* con values le vuelvo a cargar los datos al formulario, para que no se borren */
    
})

/* exportamos el modulo router */
module.exports = router