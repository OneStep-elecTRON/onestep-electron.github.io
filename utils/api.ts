import Axios from "axios";
import { getCookie } from "./cookie";

export default Axios.create({
  baseURL: "https://onestep-server.herokuapp.com/" || "http://localhost:4000/",
  headers: {
    authorization: `Bearer ${getCookie("token")}`,
  },
});
