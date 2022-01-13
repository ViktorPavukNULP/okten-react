import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.posts)
        .then(value => value.json())
}

const getByUserId = (id) => {
    return fetch(urls.posts)
        .then(value => value.json())
        .then(value => value.filter(post=>post.userId === id))
}

export const postService = {
    getAll,
    getByUserId
}