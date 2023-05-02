import axios from "axios";
export const api=axios.create({
    baseURL:"https://server-kenzie-museu.onrender.com/",
    timeout:8000,
})