//este backend vive en servidor ecterno y no tiene acceso a pag web

export const user = {
  fullname: "",
  username: "",
  password: "",

  register: function () {
    console.log("From backend register");
    localStorage.setItem("fullname", this.fullname);
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
  },

  /* login() {}, */

  async cargar(fullname, username, password) {
    var fullname = localStorage.getItem("fullname");
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    if (
      fullname === fullname &&
      username === username &&
      password === password
    ) {
      return true;
      /* console.log(fullname);
      console.log(username);
      console.log(password); */
    } else {
      return false;
    }
  },
};
