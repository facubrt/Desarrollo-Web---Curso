/* CLASES */

// class Usuario {
//     constructor(nombre) {
//         this._nombre = nombre;
//     }

//     get getNombre() {
//         return this._nombre
//     }

//     set setNombre(nombre) {
//         if (nombre != '') {
//             this._nombre = nombre;
//         }
//     }
// }

// let cliente = new Usuario('Juan')

// cliente.setNombre = ''

// console.log(cliente.nombre)

/* PROMESAS */
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resuelto"), 1000)
// })

// promise.then(response => console.log(response))

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (error == true) {
//             return reject(new Error("ERROR!"))
//         }
//         console.log('Hola')

//     }, 1000)

// })

const multiplicar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return Promise.reject('Los valores de los parametros no son numeros');

    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1: num1,
                num2: num2,
                resultado: num1 * num2
            })
        }, 500)
    })
}

// multiplicar(1, 2)
//     .then(response => {
//         // para hacer esto debo usar backticks no comillas simples
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(2, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(3, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(4, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(5, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(6, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(7, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(8, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(9, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//         return multiplicar(10, 2)
//     })
//     .then(response => {
//         console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
//     })
//     .catch(error => console.error(error))

const table = async () => {
    try {
        for (i = 1; i <= 10; i++) {
            let resultado = await multiplicar(i, 2)
            console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)
        }
    } catch (error) {
        console.error(error)
    }
}

table()