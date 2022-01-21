import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div className="Post">
            {post.id} - {post.title}
            <Link to={post.id.toString()} state={post}>
                <button>Post details</button>
            </Link>
        </div>
    );
};

export default Post;