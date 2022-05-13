// este backend vive en el servidor externo y no tiene acceso a la pagina web.

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

      // save data to local storage
      localStorage.setItem("fullname", this.fullname);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);

      return true;
    } catch (error) {
      console.error("Error: ", error);
      return false;
    }
  },

  getInfo() {
    try {
      this.fullname = localStorage.getItem("fullname");
      this.username = localStorage.getItem("username");

      if (this.fullname === null || this.username === null)
        throw "No hay datos en el localStorage";

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
      console.error("Error: ", error);
      return false;
    }
  },
};

export const blog = {
  posts: [],

  addPost(post) {
    try {
      this.getBlog();

      // this.posts.push(post);
      this.posts = [...this.posts, post];

      localStorage.setItem("blog", JSON.stringify(this.posts));
      return true;
    } catch (error) {
      console.error("Error: ", error);
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
};
