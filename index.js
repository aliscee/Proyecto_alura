function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Logoinc = document.getElementById("Logoinc");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        Logoinc.src = "./imagenes/encriptado.jpg";

    }   else {
        Logoinc.src = "./imagenes/Logoinc.jpg";
        tituloMensaje.textContent = "ningun mensage fue ingresado";
        parrafo.textContent = "Ingresa el texto que desea incriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Logoinc = document.getElementById("Logoinc");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        Logoinc.src = "./imagenes/desencriptado.jpg";
    }   else {
        Logoinc.src = "./imagenes/Logoinc.jpg";
        tituloMensaje.textContent = "ningun mensage fue ingresado";
        parrafo.textContent = "Ingresa el texto que desea incriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }

    

}