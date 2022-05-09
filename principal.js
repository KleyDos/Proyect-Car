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

      console.log("respueta del bakend: ", respuesta);
    }
  },
  buscarPerfil() {
    console.log("Buscando perfil...");
    const respuesta = user.getInfo();
    console.log("respuesta del backend: ", respuesta);

    if (respuesta === false) window.location.href = "./login.html";

    let nombreCompleto = document.getElementById("nombreCompleto");
    let usuario = document.getElementById("usuario");

    nombreCompleto.value = respuesta.fullname;
    usuario.value = respuesta.username;
  },
  editar() {
    console.log("Editando perfil...");
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const usuario = document.getElementById("usuario").value;
    //user.fullname = nombreCompleto;
    //user.username = usuario;

    const respuesta = user.editUser(nombreCompleto, usuario);
    if (!respuesta) {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Ha ocurrido un error al editar<p>";
    } else {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Usuario guardado correctamente</p>";
    }
  },
};
