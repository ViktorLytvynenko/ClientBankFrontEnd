import axios from "axios";

export const instance = axios.create({
    // baseURL: 'http://localhost:9000/api/v1'
    baseURL: 'https://springhw1-f5412575bf3e.herokuapp.com/api/v1'
});