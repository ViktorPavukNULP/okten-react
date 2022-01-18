import {urls} from "../configs/urls";
import axios from "axios";
import baseURL from "../configs/urls";

const axiosInstance = axios.create({
    baseURL
});

const createCar = (car) => {
    return axiosInstance.post(urls.cars, car).then(value => value.data)
}

const getAll = () => {
    return axiosInstance.get(urls.cars).then(value => value.data)
}

const getById = (id) => {
    return axiosInstance.get(`${urls.cars}/${id}`).then(value => value.data)
}

const updateById = (id, car) => {
    return axiosInstance.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}

const deleteById = (id) => {
    return axiosInstance.delete(`${urls.cars}/${id}`).then(value => value.data)
}

export const carService = {
    createCar,
    getAll,
    getById,
    updateById,
    deleteById
}