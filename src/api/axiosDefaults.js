import axios from "axios";

axios.defaults.baseURL = 'https://moments-w-b3eddd801b4b.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-date';
axios.defaults.withCredentials = true;