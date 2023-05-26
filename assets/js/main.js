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
  let textarea = document.getElementById("texto").value;
  let caracteres = textarea.length;
  let textoEncriptado = "";
  const llavesEncriptacion = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  for (let caracter = 0; caracter < caracteres; caracter++) {
    if (llavesEncriptacion.hasOwnProperty(textarea[caracter])) {
      // Si el caracter existe en las llaves de encriptación, se reemplaza por su valor encriptado
      textoEncriptado += llavesEncriptacion[textarea[caracter]];
    } else {
      // Si no existe en las llaves de encriptación, se mantiene el mismo caracter
      textoEncriptado += textarea[caracter];
    }
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

  MostrarMensaje(textoDesencriptado);
}
