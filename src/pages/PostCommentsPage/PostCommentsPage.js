import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import "./PostCommentsPage.css";

const PostCommentsPage = () => {
    const {state} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getByPostId(state)
            .then(value => setComments(value))
    }, [state]);

    return (
        <div className="PostsCommentsPage">
            {comments.map(comment => {
                return <div key={comment.id}>
                    <h3>{comment.id} - {comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            })}
        </div>
    );
};

export default PostCommentsPage;