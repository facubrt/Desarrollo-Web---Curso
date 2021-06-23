const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    console.log('request...')
    response.send('Hola desde express!!')
})

router.get('/productos', (request, response) => {
    console.log('request...')
    response.send('Listado de productos')
})

/* exportamos el modulo router */
module.exports = router