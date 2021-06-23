// modulo parte del core de node
const http = require('http')
const fs = require('fs')

// __dirname me da el directorio actual
//console.log(__dirname)
// FORMA SINCRONICA
//const html = fs.readFileSync(__dirname + '/index.html')
/* fire system 'fs' lee el archivo de forma sincrónica */

// FORMA ASINCRONICA - la mejor
const server = http.createServer((request, response) => {
    /* todos los servidores tienen un request y un response
    request obtiene datos de quien esta llamando al servidor
    y response responde al request*/
    fs.readFile(__dirname + '/index.html', (err, html) => {
        if(err){
            response.writeHead(500)
            response.write(err.message)
        } else {
            // response.writeHead(200, {'Content-Type': 'text/html'})
            // response.write(html)
            response.writeHead(200, {'Content-Type': 'application/json'})
            /* stringify transforma un objeto json en una cadena de texto */
            response.write(JSON.stringify({name: 'Juan', 'edad': 33}))
            
            
        }
        response.end()
    })
})

const PORT = 3000

server.listen(PORT, () => {console.log(`http://localhost:${PORT}`)})