import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";
import "./PostCommentsPage.css";
import PostComments from "../../components/PostComments/PostComments";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(id)
            .then(value => setComments(value))
    }, [id]);

    return (
        <div className="PostsCommentsPage">
            {comments.map(comment => <PostComments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};