import axios from "axios";

//14403430/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
