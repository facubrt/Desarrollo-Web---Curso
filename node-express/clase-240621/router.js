const express = require('express')
const router = express.Router()

const productos = [
    {id: 1, name: 'Producto Nro 1'},
    {id: 2, name: 'Producto Nro 2'},
    {id: 3, name: 'Producto Nro 3'},
]

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/productos', (request, response) => {
    response.render('productos/index', { productos })
})

router.get('/productos/:id', (request, response) => {
    const producto = productos.find(producto => producto.id == request.params.id)
    response.render('productos/show', { producto })
})

/* exportamos el modulo router */
module.exports = router