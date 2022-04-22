import { user } from "./backend.js";

export default {
  registro() {
    const fullname = document.getElementById("fullname").value;
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "" || fullname === "") {
      const error = document.getElementById("error");

      error.innerHTML = "<p>Faltan datos requeridos<p>";
    } else {
      // TODO: enviar datos de usuario al backend
      // ejemplo: user.fullname = fullname;
      // recibir true o false de respuesta
      // si la respuesta es true, redireccionar a la pagina perfil.html
      // si la respuesta es false, mostrar un mensaje de error
      user.register();
    }
  },
  datos() {
    console.log("inicia datos");

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    console.log(usuario, contrasena);

    if ((usuario === "") | (contrasena === "")) {
      const error = document.getElementById("error");

      error.innerHTML = "<p>Faltan datos requeridos<p>";
    } else {
      // api.usuario = usuario;
      // api.contrasena = contrasena;
      // api.registro();
    }
  },
};
