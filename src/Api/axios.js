import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-132f6/us-central1/api", // The API URL
});

export { axiosinstance };
