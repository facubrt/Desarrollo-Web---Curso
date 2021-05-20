// setTimeout(function () { console.log('pasaron 3 segundos') }, 3000)

// /* ejemplo de callback */
// function callback() {
//     console.log('hola desde el callback')
// }

// function mensaje(fn) {
//     fn()
// }

// mensaje(callback)

// const fun1 = function (done) {
//     setTimeout(function () {
//         console.log('funcion 1')
//         done()
//     }, 1000)
// }

// const fun2 = function () {
//     console.log('funcion 2')
// }

// // fun1()
// // fun2()

// 
// fun1(fun2)

/* API REST con fetch */
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.log(error))
//cuando hay algun error.