

// function mensaje(nombre, alerta = false) {
//     if (alerta) {
//         alert('Hola ' + nombre)
//     } else {
//         console.log('Hola ' + nombre)
//     }
// }

// mensaje('Juan', true)

/* SI TENGO DOS FUNCIONES Y PASO A UNA EL NOMBRE DE OTRA SIN LOS
PARENTESIS, LO QUE ESTOY PASANDO ES LA FUNCIÓN. SI PASO EL NOMBRE
CON LOS PAREENTESIS, LO QUE ESTOY PASANDO ES EL RESULTADO DE LA FUNCION
esto permite llamar funciones como callback dentro de otras funciones

por ejemplo

const mensaje = function(nombre, callback) {
    callback('Hola ' + nombre)
}

const mensajeAlert = function(text) {
    alert(texto)
}

const mensajeConsole = function(texto) {
    console.log(texto)
}

mensaje('Maria', mensajeAlert)
mensaje('Juan', mensajeConsole)
*/


const mensaje = function (nombre, callback) {
    callback('Hola ' + nombre)
}

const mensajeAlert = function (texto) {
    alert(texto)
}

const mensajeConsole = function (texto) {
    console.log(texto)
}

mensaje('Maria', mensajeAlert)
mensaje('Juan', mensajeConsole)