import axios from "axios";

export const instance = axios.create({
    // baseURL: 'http://localhost:9000/api'
    baseURL: 'https://springhw1-f5412575bf3e.herokuapp.com/api/v1'
});