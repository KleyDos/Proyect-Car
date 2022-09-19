//este backend vive en servidor ecterno y no tiene acceso a pag web
import axios from "axios";

export const user = {
  fullname: "",
  username: "",
  password: "",

  register: function () {
    //save data to banckend
    const data = {
      fullname: this.fullname,
      username: this.username,
      password: this.password,
    };
    const config = {
      method: "post",
      url: "http://localhost:3000/register",
      headers: {},
      data: data,
    };
    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
    // .catch(function (error) {
    //   console.log(error);
    // });
  },

  getInfo() {
    const data = {
      fullname: this.fullname,
      username: this.username,
    };
    const config = {
      method: "post",
      url: "http://localhost:3000/info",
      headers: {},
      data: data,
    };
    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
  },

  editUser(fname, us) {
    const data = {
      fullname: fname,
      username: us,
    };
    console.log("mostrar :", data);
    const config = {
      method: "post",
      url: "http://localhost:3000/editar",
      headers: {},
      data: data,
    };
    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
  },

  logout() {
    const config = {
      method: "post",
      url: "http://localhost:3000/logout",
      headers: {},
    };
    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
  },
};

export const blog = {
  posts: [],

  addPost(post) {
    const config = {
      method: "post",
      url: "http://localhost:3000/add",
      headers: {},
      data: post,
    };

    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
  },

  getBlog() {
    const config = {
      method: "post",
      url: "http://localhost:3000/get",
      headers: {},
    };
    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
  },

  deletePost(id) {
    const config = {
      method: "post",
      url: "http://localhost:3000/delete",
      headers: {},
      data: { id },
    };

    return axios(config).then(function (response) {
      console.log("backend response: ", response.data);
      return response.data;
    });
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
