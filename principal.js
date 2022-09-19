import { blog, user } from "./backend.js";
import { v4 as uuidv4 } from "uuid";
// import {bootstrap} from "bootstrap";

export default {
  async registro() {
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

      const respuesta = await user.register();

      if (respuesta === true) {
        window.location.href = "./perfil.html";
      } else {
        error.innerHTML = "<p>Error al registrar el usuario<p>";
      }

      console.log("respueta del bakend: ", respuesta);
    }
  },

  async buscarPerfil() {
    console.log("Buscando perfil...");
    const respuesta = await user.getInfo();
    console.log("respuesta del backend: ", respuesta);

    if (respuesta === false) window.location.href = "./login.html";

    let nombreCompleto = document.getElementById("nombreCompleto");
    let usuario = document.getElementById("usuario");

    nombreCompleto.value = respuesta.fullname;
    usuario.value = respuesta.username;
  },
  async editar() {
    console.log("Editando perfil...");
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const usuario = document.getElementById("usuario").value;
    //user.fullname = nombreCompleto;
    //user.username = usuario;

    const respuesta = await user.editUser(nombreCompleto, usuario);
    if (!respuesta) {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Ha ocurrido un error al editar<p>";
    } else {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Usuario guardado correctamente</p>";

      // const toast = new bootstrap.Toast(toastLiveExample);

      // toast.show();
    }
  },
  async logout() {
    console.log("Cerrando sesion...");

    if (await user.logout()) {
      window.location.href = "./index.html";
    } else {
      const error = document.getElementById("mensaje");
      error.innerHTML = "<p>Error al borrar localstorage<p>";
    }
  },

  async agregarPost() {
    const titulo = document.getElementById("titulo");
    const historia = document.getElementById("historia");
    const autor = document.getElementById("autor");

    if (titulo === "" || historia === "" || autor === "") {
      const error = document.getElementById("error");
      error.innerHTML = "<p>Los campos no pueden estar vacios<p>";
    } else {
      const mipost = {
        //titulo,
        titulo: titulo.value,
        //historia,
        historia: historia.value,
        autor: autor.value,
        metadata: {
          fecha: new Date(),
          id: uuidv4(),
        },
      };
      console.log("mipost: ", mipost);
      //agregar al array blog
      blog.addPost(mipost);
      titulo.value = "";
      historia.value = "";
      autor.value = "";
    }
  },

  async mostrarBlog() {
    console.log("Mostrar blog...");
    const respuesta = await blog.getBlog();
    const mensaje = document.getElementById("mensaje");

    if (!respuesta) {
      mensaje.innerHTML = "<p>Error al obtener el blog<p>";
    } else {
      mensaje.innerHTML = "";
      respuesta.forEach((element) => {
        if (element)
          mensaje.innerHTML += `

          <div id="${element.metadata.id}">
            <h2 id="${element.titulo}">${element.titulo}</h2>
            <br><figcaption  class="blockquote-footer">${element.autor}</cite></figcaption>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${element.historia}</textarea>
            <input class="btn btn-primary" type="button" value="Editar" onclick="funcion_editarPost('${element.metadata.id}')">
            <input class="btn btn-primary" type="button" value="Elimitar" onclick="funcion_eliminarPost('${element.metadata.id}')">
           <hr/>
          </div>

      `;
      });
      //Ejemplo basico
      // const post1 = blog.posts[0];
      // console.log("post1 :>> ", post1);
      // const post2 = blog.posts[1];
      // console.log("post2 :>> ", post2);

      // // mensaje.innerHTML = "<div><h2>" + post1.titulo + "</h2></div>"
      // mensaje.innerHTML = `
      //   <div>
      //     <h2>${post1.titulo}</h2>
      //   </div>
      // `

      // mensaje.innerHTML += `
      //   <div>
      //     <h2>${post2.titulo}</h2>
      //   </div>
      // `;
    }
  },
  eliminarPost(id) {
    blog.deletePost(id);

    this.mostrarBlog();
  },
  guardarPost(nuevoPost) {
    blog.savePost(nuevoPost);
    this.mostrarBlog();
  },
};
