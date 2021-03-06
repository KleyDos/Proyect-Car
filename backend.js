//este backend vive en servidor ecterno y no tiene acceso a pag web

export const user = {
  fullname: "",
  username: "",
  password: "",

  register: function () {
    try {
      console.log("From backend register: ");
      console.log("fullname", this.fullname);
      console.log("username", this.username);
      console.log("password", this.password);

      //save data to local storage
      localStorage.setItem("fullname", this.fullname);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);

      return true;
    } catch (error) {
      console.log("Error", error);
      return false;
    }
  },

  getInfo() {
    try {
      this.fullname = localStorage.getItem("fullname");
      this.username = localStorage.getItem("username");

      if (this.fullname === null || this.username === null)
        throw "No hay datos en el localstorage";

      return {
        fullname: this.fullname,
        username: this.username,
      };
    } catch (error) {
      console.error("Error: ", error);
      return false;
    }
  },

  editUser(fname, us) {
    try {
      console.log("f", fname);
      console.log("u", us);
      localStorage.setItem("fullname", fname);
      localStorage.setItem("username", us);

      return true;
    } catch (error) {
      console.error("Error: ", error);
      return false;
    }
  },

  logout() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("error: ", error);
      return false;
    }
  },
};

export const blog = {
  posts: [],

  addPost(post) {
    try {
      this.getBlog();

      //this.posts.push(post);
      this.posts = [...this.posts, post];

      localStorage.setItem("blog", JSON.stringify(this.posts));
      return true;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  getBlog() {
    try {
      this.posts = JSON.parse(localStorage.getItem("blog"));
      if (this.posts === null) this.posts = [];
      console.table(this.posts);
      return true;
    } catch (error) {
      console.error("Error: ", error);
      return false;
    }
  },

  deletePost(postDelete) {
    try {
      console.log("Post Eliminado", postDelete);

      this.posts = this.posts.filter((post) => {
        console.log("post iteraci??n", post.titulo);
        if (postDelete !== post.titulo) {
          return true;
        }
      });

      console.table(this.posts);

      localStorage.setItem("blog", JSON.stringify(this.posts));

      // localStorage.removeItem("posts", JSON.stringify(this.posts));
      return true;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  savePost(newPost) {
    const postEditado = this.posts.find((post) => {
      if (newPost.id === post.metadata.id) {
        return true;
      }
    });

    postEditado.titulo = newPost.titulo;
    postEditado.autor = newPost.autor;
    postEditado.historia = newPost.historia;
    console.log("postEditado", postEditado);
    localStorage.setItem("blog", JSON.stringify(this.posts));
  },
};
