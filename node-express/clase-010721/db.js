require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'node'
})

connection.connect((error) => {
    if (error) { throw error}
})

// connection.query('SELECT * FROM productos', (error, results) => {
//     if (error) {throw error}

//     console.log(results)
// })

// connection.end()

module.exports = connection