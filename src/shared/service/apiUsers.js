/* eslint class-methods-use-this: ["error", { "exceptMethods": [
  "lsUsers","listMun", "listZon", "listPro", "listData","asignP","desbloq"
] }] */
import { Component } from 'react';
import axios from 'axios';

const URL = 'https://prova.com.gt/WS_PRODUCTOS/ws/post/';

class ApiUsers extends Component {
  constructor() {
    super();
    this.lsUsers = this.listDep.bind(this);
  }

  lsUsers(data) {
    return axios.get(`${URL}listDepartamento`, data);
  }

  listMun(data) {
    return axios.put(`${URL}listMunicipio`, data);
  }

  listZon(data) {
    return axios.post(`${URL}listZonas`, data);
  }
}

export default new ApiUsers();
