import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import "./PostDetailsPage.css";
import PostDetails from "../../components/PostDetails/PostDetails";

const PostDetailsPage = () => {

    const [post,setPost] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state);
            return;
        }
        postService.getById(id)
            .then(value => setPost(value))
    },[id]);

    return (
        <div className="PostDetails">
            { post && <PostDetails post={post}/> }
            <Outlet/>
        </div>

    );
};

export {PostDetailsPage};