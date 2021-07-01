const connection = require('../db')

module.exports.index = (request, response) => {

    connection.query('SELECT * FROM productos', (error, results) => {
        if (error) {throw error}

        response.render('productos/index', { productos: results })
    })
    
}

module.exports.show = (request, response) => {
    connection.query('SELECT * FROM productos WHERE id = ?', [request.params.id], (error, results) => {
        if (error) {throw error}

        if (results.length > 0) {
            response.render('productos/show', { producto: results[0] })
        } else {
            response.send('no hay registro')
        }
        
    })
}

module.exports.create = (request, response) => {
    response.render('productos/create')
} 

module.exports.store = (request, response) => {
    connection.query('INSERT INTO productos SET ?', { name: request.body.name}, (error) => {
        if (error) {throw error}
        
        response.redirect('/productos')
    }) 
}
