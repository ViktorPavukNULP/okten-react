import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getByUsertId: id => axiosService(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}