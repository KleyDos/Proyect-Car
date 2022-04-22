// este backend vive en el servidor externo y no tiene acceso a la pagina web.

export const user = {
  fullname: "",
  username: "",
  password: "",
  register: function () {
    console.log("From backend register");
    // guardar los datos del usuario en localStorage
    // localStorage.setItem("fullname", this.fullname);
    // retornar true o false si se pudo registrar o no

  },
  login() {},
};
