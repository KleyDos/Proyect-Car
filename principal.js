import { user } from "./backend.js";

export default {
  registro() {
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "" || nombreCompleto === "") {
      const error = document.getElementById("error");

      error.innerHTML = "<p>Faltan datos requeridos<p>";
    } else {
      user.fullname = nombreCompleto;
      user.username = usuario;
      user.password = contrasena;

      const respuesta = user.register();

      if (respuesta === true) {
        window.location.href = "./perfil.html";
      } else {
        error.innerHTML = "<p>Error al registrar el usuario<p>";
      }

      console.log("respueta del bakend:, respuesta");
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
    }
  },
};
