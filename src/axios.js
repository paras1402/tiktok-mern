import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backenddb-mern.herokuapp.com/",
});
export default instance;
