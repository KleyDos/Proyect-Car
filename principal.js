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

      user.fullname = fullname;
      user.username = usuario;
      user.password = contrasena;
      

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



    }
  },
};
