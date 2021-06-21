var form = document.querySelector('form');
var correo = document.getElementById('correo');
var clave = document.getElementById('clave');
 
form.onsubmit = function(e) {
  if (correo.value === '' && clave.value === '') {
    e.preventDefault();
    alert('Completá ambos datos!');
    return false;
  }
  else if (!correo.value.includes('@')) {
    e.preventDefault();
    alert('Ingresa un correo correcto!')
    return false;
  }
  
  else if (clave.value === '') {
    e.preventDefault();
    alert('Ingresa una clave!')
    return false;

  }
  alert('Datos correctos!');
  return true;
}


// ingresar = document.getElementById("ingresar")

// ingresar.addEventListener('click', function() {
//     email = document.getElementById("email").value;
//     clave = document.getElementById("clave").value;
//     validacionCorreo = validarCorreo()
//     validacionClave = validarClave()
//     if (validacionCorreo && validacionClave) {
//         console.log("correo y claves correctos")
//         return true
//     }
        
//     else if (validacionCorreo && !validacionClave) {
//         alert("Ingrese una clave para continuar")
//         return false
//     }

//     else if (!validacionCorreo && validacionClave) {
//         alert("Ingrese una correo correcto")
//         return false
//     }

//     else {
//         alert("Ingrese correo y clave para continuar")
//         return false
//     }

// });

// function validarCorreo(correo) {
//     if(correo.includes('@')) {
//         return true;
//     } else {
//         return false;
//     }    
// }

// function validarClave(clave) {
//     if(clave != null) {
//         return true;
//     } else {
//         return false;
//     }    
// }
    