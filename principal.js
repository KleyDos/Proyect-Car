import { user } from "./backend.js";

export default {
  registro() {
    const fullmname = document.getElementById("fullname").value;
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "" || fullname === "") {
      const error = document.getElementById("error");

      error.innerHTML = "<p>Faltan datos requeridos<p>";
    } else {

      //TODO enviar datos de usuario al backend
      //ejemplo: user.fullneme = fullname
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
