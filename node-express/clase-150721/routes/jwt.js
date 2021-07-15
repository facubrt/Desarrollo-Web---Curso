const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

const jwt = require('jsonwebtoken')

const connection = require('../db')

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) { 
        connection.query('SELECT * FROM usuarios WHERE email = ?', [ req.body.email ], async (err, results) => {
            if (err) { return res.sendStatus(500) }

            if (results.length == 0) {
                res.send('Email y/o password incorrectos')
            } else {
                const valid = await bcryptjs.compare(req.body.password, results[0].password)

                if (valid) {
                    const payload = {user_id: results[0].id}
                    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '1h'})
                    res.json({token})
                } else {
                    res.json({error: "Email y/o password incorrectos"})
                }
            }
        })
    } else {
        res.json({error: "Email y/o password incorrectos"})
    }
})

const isJWTLogin = (req, res, next) => {
    /* ejecuta next solo si el token es valido */
    let token = req.headers['authorization']
    if (token) {
        token = token.replace('Bearer ', '')
        console.log(token)
        /* verificacion de token */
        jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
            if(error) {
                res.sendStatus(401)
            } else {
                console.log(decoded)
                /* avanza a /perfil */
                next()
            }
        })
    } else {
        /* 401 es que no estas autorizado */
        res.sendStatus(401)
    }
}

/* el MIDDLEWOR se coloca en la ruta que quiero proteger. entonces primero se comprueba isJWTLogin y luego si pasa sigue */
router.get('/perfil', isJWTLogin, (req, res) => {
    res.send('Perfil')
})

module.exports = router