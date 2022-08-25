import axios from "axios";

export const api = axios.create({
    baseURL: 'http://api.rentmeup.ml:8080'
})