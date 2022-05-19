import { user } from "./backend.js";

const blog = [];

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
  //prueba propia
  // logout() {
  //   // localStorage.setItem("fullname", this.fullname);
  //   // localStorage.setItem("username", this.username);
  //   // localStorage.setItem("password", this.password);

  //   localStorage.removeItem("fullname", "username");
  // },

  agregarPost() {
    const titulo = document.getElementById("titulo");
    const historia = document.getElementById("historia");
    console.log("agregar post: ", titulo, historia);

    const post = {
      titulo: titulo.value,
            historia: historia.value,
    };
    console.log("post: ", post);


blog.push(post);
titulo.value = "";
historia.value = "";

console.log("blog: ", blog);
  },
};
