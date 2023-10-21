import axios from "axios";

axios.defaults.baseURL =
  "https://learn-django-rest-8c1f3578007f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-date";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();