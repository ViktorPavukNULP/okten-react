import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import "./PostDetailsPage.css";

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
    },[state, id]);

    return (
        <div className="PostDetails">
            { post && <div className="Post">
                <h2>{post.id} - {post.title}</h2>
                <p>{post.body}</p>
                <Link to="comments" state={post.id}><button>Comments</button></Link>
            </div>}
            <Outlet/>
        </div>

    );
};

export default PostDetailsPage;