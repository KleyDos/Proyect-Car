import { blog, user } from "./backend.js";

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
<<<<<<< HEAD
    //user.fullname = nombreCompleto;
    //user.username = usuario;
=======
    // user.fullname = nombreCompleto;
    // user.username = usuario;
>>>>>>> ff8d112 (register)

    const respuesta = user.editUser(nombreCompleto, usuario);
    if (!respuesta) {
      const mensaje = document.getElementById("mensaje");

<<<<<<< HEAD
      mensaje.innerHTML = "<p>Ha ocurrido un error al editar<p>";
    } else {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Usuario guardado correctamente</p>";
=======
      mensaje.innerHTML = "<p>Ha ocurrido un error al editar 🤕<p>";
    } else {
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML = "<p>Usuario guardado correctamente 😃<p>";
>>>>>>> ff8d112 (register)
    }
  },
  logout() {
    console.log("Cerrando sesion...");

    if (user.logout()) {
      window.location.href = "./index.html";
    } else {
      const error = document.getElementById("mensaje");
      error.innerHTML = "<p>Error al borrar localstorage<p>";
    }
  },

  agregarPost() {
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
      };
      console.log("mipost: ", mipost);
      //agregar al array blog
      blog.addPost(mipost);
      titulo.value = "";
      historia.value = "";
      autor.value = "";
    }
  },

  mostrarBlog() {
    console.log("Mostrar blog...");
    const respuesta = blog.getBlog();
    const mensaje = document.getElementById("mensaje");
    if (!respuesta) {
      mensaje.innerHTML = "<p>Error al obtener el blog<p>";
    } else {
      JSON.stringify(blog.post);
      blog.posts.forEach((element) => {
        if (element)
          mensaje.innerHTML += `
          <div>
            <h2 id="${element.titulo}">${element.titulo}</h2>
            <h4>${element.autor}</h4>
            <p>${element.historia}</p>
            <input type="button" value="Editar" onclick=""/>
            <input type="button" value="Elimitar" onclick="funcion_eliminarPost(${element.titulo})"/>
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
  eliminarPost(titulo) {
    blog.deletePost(titulo);
    const mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "";

    this.mostrarBlog();
  },
};
