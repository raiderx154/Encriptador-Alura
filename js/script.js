let textoCifrado;
let muneco = document.getElementById("imgmuneco");
let subtitulo = document.getElementById("subtitulo");
let palabra = document.getElementById("palabra");
let parrafo = document.getElementById("parrafo");
let botonCopiar = document.getElementById("btn-copy");

function btnEncriptar() {
    encriptar();
    if (textoCifrado.length > 0) { // Verifica si hay texto cifrado
        parrafo.textContent = textoCifrado;
        palabra.value = "";
        muneco.style.display = "none";
        subtitulo.style.display = "none";
        botonCopiar.style.display = "block"; // Muestra el botón Copiar
    } else {
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        botonCopiar.style.display = "none"; // Oculta el botón Copiar si no hay texto
    }
}

function btnDesencriptar() {
    desencriptar();
    if (textoCifrado.length > 0) { // Verifica si hay texto cifrado
        parrafo.textContent = textoCifrado;
        palabra.value = "";
        botonCopiar.style.display = "block"; // Muestra el botón Copiar
    } else {
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        botonCopiar.style.display = "none"; // Oculta el botón Copiar si no hay texto
    }
}

function encriptar() {
    var palabra = document.getElementById("palabra").value.toLowerCase();
    textoCifrado = palabra
        .replace(/e/igm, "enter")
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/o/igm, "ober")
        .replace(/u/igm, "ufat");

    if (palabra.length === 0) {
        textoCifrado = ""; // No hay texto para cifrar
    }

    // Mostrar alerta si no hay texto para encriptar
    if (textoCifrado.length === 0) {
        Swal.fire({
            title: "Ingresa un texto",
            icon: "error"
        });
    }
}

function desencriptar() {
    var palabra = document.getElementById("palabra").value.toLowerCase();
    textoCifrado = palabra
        .replace(/enter/igm, "e")
        .replace(/imes/igm, "i")
        .replace(/ai/igm, "a")
        .replace(/ober/igm, "o")
        .replace(/ufat/igm, "u");

    // Mostrar alerta si no hay texto para desencriptar
    if (textoCifrado.length === 0) {
        Swal.fire({
            title: "Ingresa un texto",
            icon: "error"
        });
    }
}

function copiar() {
    const cifrado = document.getElementById('parrafo').textContent;
    navigator.clipboard.writeText(cifrado).then(() => {
        botonCopiar.textContent = 'Copiado';
        setTimeout(() => botonCopiar.textContent = 'Copiar', 2000); // Reset text after 2 seconds
    }).catch(err => {
        Swal.fire({
            title: "Error al copiar",
            text: err.toString(),
            icon: "error"
        });
    });
}
