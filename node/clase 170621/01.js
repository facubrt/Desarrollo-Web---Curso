// modulo parte del core de node
const http = require('http')

const server = http.createServer((request, response) => {
    /* todos los servidores tienen un request y un response
    request obtiene datos de quien esta llamando al servidor
    y response responde al request*/
    console.log(request.url, request.method)
    response.end('Hola desde el server')
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})