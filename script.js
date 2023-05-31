
var btnEncriptar = document.querySelector(".encriptarDatos");
var btnDesencriptar = document.querySelector(".desencriptarDatos");
var btnCopiar = document.querySelector(".btnCopiardatos")
var imagenMensaje = document.querySelector(".columImg");
var textoRecibido = document.querySelector(".areaText2");


btnCopiar.onclick = copiar;


function encriptado() {
    ocultarMensaje();
    var textoR = textoRecuperado();
    textoRecibido.textContent = encriptarText(textoR);
}
function desencriptado() {
    ocultarMensaje();
    var labelText = document.getElementById("Label")
    labelText.innerHTML = "Texto desencriptado:";
    var textoR = textoRecuperado();
    textoRecibido.textContent = desencriptarText(textoR);
}
function limpiarCampo() {
    location.reload();
}

function copiar() {
    textoRecibido.select();
    navigator.clipboard.writeText(textoRecibido.value)
    textoRecibido.value = "";
    alert("Texto Copiado")

}

function textoRecuperado() {
    if (!validarTexto()) {
        var texto = document.querySelector(".textoIngresado");
        return texto.value;
    }
}

function validarTexto() {
    var textoEscrito = document.querySelector(".textoIngresado").value;
    var validador = textoEscrito.match(/^[a-z ]*$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }

}

function ocultarMensaje() {
    imagenMensaje.classList.add("ocultar");
}

function encriptarText(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarText(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
} 