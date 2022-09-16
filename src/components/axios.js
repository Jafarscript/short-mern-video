import axios from "axios";
const instance = axios.create({
  baseURL: "https://short-video-app-mern101.herokuapp.com/",
});
export default instance;
