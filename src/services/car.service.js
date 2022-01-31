import axios from "axios";

import {urls} from "../constants/urls";

const axiosInstance = axios.create({baseURL: "http://91.201.233.14/api/v2"});

export const carService = {
    getAll: () => axiosInstance.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`).then(value => value.data),
    create: (car) => axiosInstance.post(urls.cars,car).then(value => value.data),
    update: (id, newCar) => axiosInstance.patch(`${urls.cars}/${id}`,newCar)
}