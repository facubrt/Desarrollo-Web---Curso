
// VARIABLES

let num1 = 4
let num2 = '4' // mismo valor pero datos diferentes

/*
num1 == num2 va a devolver verdadero porque el valor es el mismo, aunque
no sean mismos tipos. el triple igual dará falso porque tiene que ser mismo
valor y mismo tipo
*/

// IF

if (num1 !== num2) {
    console.log('if')
} 

else if (num1 === num2) {
    console.log('else if')
}

else {
    console.log('else')
}