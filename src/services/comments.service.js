import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getByPostId: id => axiosService(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}