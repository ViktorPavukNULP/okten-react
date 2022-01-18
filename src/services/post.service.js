import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService(urls.posts).then(value => value.data),
    getById: id => axiosService(`${urls.posts}/${id}`).then(value => value.data)
}