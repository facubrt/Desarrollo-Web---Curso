// ANATOMIA JS

// las variables se declaran con var o con let. Las constantes son const
// let es recomendable ya que var presenta algunas problemáticas
// las variables pueden ser de tres tipos, caracteres, numeros y logicos (booleanos)
// para realizar operaciones aritmeticas, debemos aseguarnos de que las variables sean
// numeros, o utilizar funciones como parseInt o parseFloat para convertir las variables a numeros

//ARITMETICA
let num1 = 4
let num2 = '4'
//aritmetica similar a muchos otros lenguajes
//con excepcion de:

//== es para comparación (compara valor)
num1 == num2 // esto devolvera true

//pero === es comparación exacta (compara valor y tipo)
num1 === num2 // esto devolvera false

//la misma logica será para !==

// CONDICIONALES
// IF

// operadores logicos or ||  y and &&
if (num1 !== num2) {
    console.log('if')
}

else if (num1 === num2) {
    console.log('else if')
}

else {
    console.log('else')
}

// en una linea
if (num1 === num2) console.log('esto es para imprimir con ventana emergente')

// BUCLES FOR WHILE siguen la misma forma que C++

/* FUNCIONES */
function saludar() {
    console.log('Hola mundo')
    return
}

/* SCOPE
visibilidad de las VARIABLES
depende de donde fue declarada

una variable dentro de una funcion solamente existirá dentro de la misma


*/


