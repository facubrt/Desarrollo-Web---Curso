const lenguajes = ['HTML', 'CSS', 'JavaScript', 'SQL']

const bucle = function (item) {
    if (item == 'CSS') {
        return true
    } else {
        return false
    }
}
// find recibe una funcion. recorre el array y pasa cada elemento
// por la funcion
// find espera que le devuelva verdadero o falso cuadno el elemento es 
// el que se esta buscando. Luego asigna ese elemento a la variable
let lenguaje = lenguajes.find(bucle)

console.log(lenguaje)

const numeros = [4, 6, 2, 8, 4, 3, 2]

// por cada elemento retorno algo para que me devuelva tambien un array pero transformado
let valores = numeros.map(function (item) {
    if (item % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
});

console.log(valores)

// reduce. Lleva dos parametros, una funcion call y el valor
// inicial del acumulador
let valor = numeros.reduce(function (accumulator, item) {
    return accumulator + item
}, 0)