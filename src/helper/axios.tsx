import axios from "axios";

export default axios.create({
  //baseURL: "http://192.168.29.253:8006/",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
