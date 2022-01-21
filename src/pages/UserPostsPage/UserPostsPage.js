import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";

import "./UserPostsPage.css";
import UserPost from "../../components/UserPost/UserPost";

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(id)
            .then(value => setPosts(value))
    }, [id]);

    return (
        <div className="UserPostsPage">
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};