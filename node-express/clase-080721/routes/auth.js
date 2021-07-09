const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()


const connection = require('../db')

router.get('/login', (request, response) => {
    response.render('auth/login')
})

router.post('/login', (request, response) => {
    if (request.body.email && request.body.password) {
        connection.query('SELECT * FROM usuarios WHERE email = ?', [ request.body.email], async (error, results) => {
            if(error) {throw error}
            
            if (results.lenght == 0) {
                response.send('Email y/o password incorrectos')
            } else {
                const valid = await bcryptjs.compare(request.body.password, results[0].password)
                response.session.user_id = results[0].id
                response.redirect('index')
            }
        })
    } else {
        response.send('Email y/o password incorrectos')
    }
})

router.get('/register', (request, response) => {
    response.render('auth/register')
})

router.post('/register', async (request, response) => {
    if(request.body.email && request.body.password) {
        const hash = await bcryptjs.hash(request.body.password, 8)
        
        connection.query('INSERT INTO usuarios SET ?', {email: request.body.email, password: hash}, (error) => {
            if(error) {throw error}

            response.redirect('/login')
        })
    } else {
        response.send('error')
    }
})

router.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect('/login')
    })
})

module.exports = router