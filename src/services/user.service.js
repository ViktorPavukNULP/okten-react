import axios from "axios"

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
})

const getAll = () => {
    return axiosInstance.get('/users')
        .then(value => value.data);
}

export const userService = {
    getAll
}