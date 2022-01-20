import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getByAlbumId: id => axiosService(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}