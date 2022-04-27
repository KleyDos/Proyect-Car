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
      console.log("Error: ", error);
      return false;
    }
  },

  login() {},
};
