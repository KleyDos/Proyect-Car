function datos() {
  var usuario = document.getElementById("usuario").value;
  var contrasena = document.getElementById("contrasena").value;

  if ((usuario == " ") | (contrasena == " ")) {
    let div = document.getElementById("error").value;

    div.innerHTML = "<p>Faltan datos requeridos<p>";
  } else {
    // api.usuario = usuario;
    // api.contrasena = contrasena;

    // api.registro();
  }
}

