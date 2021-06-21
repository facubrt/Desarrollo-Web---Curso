
var num_tabla
var multiplicador
var resultado

for (j=0; j < 3; j++) {
    
    num_tabla = 11 - j
        
    console.log(`La tabla del ${num_tabla}:`)
    for (i = 0; i < 9; i++) {
        multiplicador = i + 1
        resultado = num_tabla * multiplicador
        console.log(`${num_tabla} x ${multiplicador} = ${resultado}`)
    }
}
