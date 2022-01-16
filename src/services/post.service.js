import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.posts)
        .then(value => value.json())
}

const getByUserId = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
}

export const postService = {
    getAll,
    getByUserId
}