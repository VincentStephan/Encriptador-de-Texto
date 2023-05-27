function esconderNingunmensaje() {
  // Muestra el mensaje ejecutado y oculta el mensaje "Ningún mensaje ejecutado"
  document.getElementById("ejecutado").style.display = "block";
  document.getElementById("ningunmensaje").style.display = "none";
}

function MostrarMensaje(mensaje) {
  // Muestra el mensaje proporcionado en el campo de texto "textoEjecutado"
  let texto = document.getElementById("textoEjecutado");
  texto.value = mensaje;
}

function copiarTexto() {
  // Copia el texto del campo de texto "textoEjecutado" al portapapeles
  texto = document.getElementById("textoEjecutado");
  texto.select();
  document.execCommand("copy");
}

function encriptar() {
  // Encripta el texto ingresado utilizando un esquema de reemplazo de caracteres

  let texto = document.getElementById("texto").value;
  let textoEncriptado = texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/im/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    if (texto.length == 0) {
      document.getElementById("ejecutado").style.display = "none";
      document.getElementById("ningunmensaje").style.display = "block"; 
    }

    MostrarMensaje(textoEncriptado);
}

function desencriptar() {
  // Desencripta el texto ingresado utilizando un esquema de reemplazo de caracteres inverso
  let textoEncriptado = document.getElementById("texto").value;
  let textoDesencriptado = textoEncriptado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");


    if (texto.length == 0) {
      document.getElementById("ejecutado").style.display = "none";
      document.getElementById("ningunmensaje").style.display = "block"; 
    }

  MostrarMensaje(textoDesencriptado);
}
