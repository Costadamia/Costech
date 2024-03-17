var botonEnviar = document.querySelector("#boton-enviar");

botonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#formulario");
    var usuario = capturarDatosUsuario(form);

    var errores = validarUsuario(usuario);

    if(errores.length > 0) {
        exhibirMensajesErrores(errores);
        var mensajeSatisfactorio = document.querySelector("#envio-satisfactorio");
        mensajeSatisfactorio.innerHTML = "";
        return;
    } else {
        envioSatisfactorio();
    }  

    form.reset();
    
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
    
    
});

//capturando los datos del formulario
function capturarDatosUsuario (form){
    var usuario = {
        nombre: form.nombre.value,
        correo: form.correo.value,
        telefono: form.telefono.value,
        mensaje: form.mensaje.value,
    }
    
    return usuario;
    console.log(usuario);
}

function validarUsuario (usuario) {
    var errores = [];

    if(usuario.nombre.length == 0) {
        errores.push("No ingresaste el nombre");
    }

    if(usuario.correo.length == 0) {
        errores.push("No ingresaste el correo");
    }

    if(usuario.telefono.length == 0) {
        errores.push("No ingresaste el telefono");
    }

    if(usuario.mensaje.length == 0) {
        errores.push("Por favor, ingresa un mensaje");
    }

    return errores; 
}

function exhibirMensajesErrores (errores) {
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
        li.classList.add("mensaje-error");
    });
}

function envioSatisfactorio (){
    var envioCorrecto = document.querySelector("#envio-satisfactorio");
    envioCorrecto.innerHTML = "El formulario ha sido llenado y enviado satisfactoriamente";
}