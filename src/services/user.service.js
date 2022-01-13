import axios from "axios"

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {}
})

const getAll = () => {
    return axiosInstance.get('users')
        .then(value => value.data);
}

const getAllFiltered = ({name, username, email}) => {
    return axiosInstance.get('users')
        .then(value => value.data)
        .then(value => value.filter(user => user.name.toLowerCase().includes(name)))
        .then(value => value.filter(user => user.username.toLowerCase().includes(username)))
        .then(value => value.filter(user => user.email.toLowerCase().includes(email)))
}

export const userService = {
    getAll,
    getAllFiltered
}