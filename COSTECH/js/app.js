
function enviar () {
    let nombre = document.getElementById('#nombre');
    let correo = document.getElementById('#correo');
    let telefono = document.getElementById('#telefono');
    console.log(nombre)
    if ((nombre.value ==true) && (correo.value == true) && (telefono.value==true)) {
        alert('La información ha sido enviada');
    } else {
        alert('Completa todos los campos');
    }
    return;
}
