import Axios from "axios";

export default Axios.create({
  baseURL: "https://onestep-server.herokuapp.com/" || "http://localhost:4000/",
});
