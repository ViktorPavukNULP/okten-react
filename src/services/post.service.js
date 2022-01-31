import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const postService = {
    getAll: ()=> axiosService.get(urls.posts).then(value => value.data)
}