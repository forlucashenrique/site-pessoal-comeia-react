import axios from 'axios';

const api = axios.create({
    baseURL: "https://crud-express-myporfolio.onrender.com/",
})


export default api;