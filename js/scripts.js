
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector(".formulario")
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}


nombre.addEventListener('input', leerTexto );
email.addEventListener('input', leerTexto );
mensaje.addEventListener('input', leerTexto );

// evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario

    const {nombre, email, mensaje} = datos;


    // crear alerta de error
    if ( nombre == '' || email == '' || mensaje == ''){
        mostrarAlerta('Todos los campos son obligatorios', true)
        
        return;
    }

    // Crear alerta de enviado
    mostrarAlerta('Su mensaje ha sido enviado')
    // Enviar formulario
    console.log("enviando formulario");
    
    setTimeout(() => {
        formulario.submit()
    }, 3000);
});

function leerTexto (e){    
    datos[e.target.id] = e.target.value
}


// mostrar alerta en formulario
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error')
    }else {
        alerta.classList.add('enviado')
    }
    formulario.appendChild( alerta )
    // Hacer que desaparezca despues de un tiempo
    setTimeout(() => {
        alerta.remove()
    }, 3000);
}


